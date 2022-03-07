const { rand } = require('./../lib/util.js')
module.exports = function store(state, emitter) {
    state.tags = [] // old version of tags

    state.select = ['Category', 'Formats', 'Types', 'Themes', 'Techniques used'].map((field) => ({
        field: field,
        options: [],
    }))
    //     { field: 'Category', options: []},
    //     'Type': [],
    //     'Theme': [],
    //     // 'Language': [],
    //     // 'Location': [],
    //     'Format': [],
    //     'Techniques used': [],

    //     // 'Year': []
    // ]

    emitter.on('toggle category tag', (_field, tagIndex) => {
        const field = state.select.filter((obj) => obj.field === _field)[0]
        console.log(field, 'tags')
        field.options[tagIndex].selected = !field.options[tagIndex].selected
        // state.tags[tagIndex].selected = !state.tags[tagIndex].selected
        // filterResultsByTags()
        emitter.emit('render')
    })

    // older version
    emitter.on('toggle tag', (tagIndex) => {
        if(tagIndex === 0) {
            state.tags[0].selected = true
            state.tags.forEach((tag, i) => {
                if(i > 0) tag.selected = false
            })
        } else {
            state.tags[tagIndex].selected = !state.tags[tagIndex].selected
            state.tags[0].selected = false
        }
        filterResultsByTags()
        emitter.emit('render')
    })

    emitter.on('update tags', () => {
        console.log('updating tags')
        updateTags()
        getTagNames()
    })

    function filterResultsByTags() {
        // if all is selected
        if(state.tags[0].selected == true) {
            state.filteredLinks.all = state.links
        } else {
        const filtered = state.tags.filter((tag) => tag.selected)
        const tags = filtered.map((tag) => tag.label)
        state.colors = filtered.map((tag) => tag.color)
        state.filteredLinks.all = state.links.filter((link) => {
            let containsTag = false
            if (link.Tags) {
                link.Tags.forEach((t) => {
                    if (tags.indexOf(t) > -1) {
                        containsTag = true
                        console.log(t, state.colorsByTag)
                        link.color = state.colorsByTag[t]
                    }
                })
            }
            return containsTag
        })
    }
    state.filteredLinks.all = state.filteredLinks.all.map((link, i) => ({
            link: link,
            width: rand(100, 350),
            top: Math.random() * window.innerHeight,
            left: Math.random() * (window.innerWidth - 300),
            transition: 'all 1s',
            selected: false,
            id: `link-${i}`
        }))
        console.log(state.filteredLinks.all)

        emitter.emit('update page count')
        emitter.emit('render')
       // console.log('tags are', tags)
    }

    function getTagNames() {
        console.log('num links', state.links.length)
        state.select.forEach((obj) => {
            const tags = state.links.reduce((prev, next) => prev.concat(next[obj.field]), [])

           // console.log(fieldName, tags)
            const filteredTags = tags.filter((item, index) => tags.indexOf(item) === index).filter((item) => item !== undefined)
            obj.options = filteredTags.map((tag, i) => ({
                label: tag,
                selected: false,
                color: `hsl(${360 * i / filteredTags.length}, 100%, 70%)`
            }))
        })
        console.log(state.select)
    }

    // (older) update tags currently shown
    function updateTags() {
        const allTags = state.links.reduce((prev, next) => prev.concat(next.Tags), [])
        const filteredTags = allTags.filter((item, index) => allTags.indexOf(item) === index)
        filteredTags.unshift('all')
        state.colorsByTag = {}
        console.log('tags', allTags, filteredTags)
        state.tags = filteredTags
            .map((tag, i) => ({
                label: tag,
                selected: tag == 'all' ? true : false,
                color: `hsl(${360 * i / filteredTags.length}, 100%, 70%)`
            }))
            //.sort(() => (Math.random() > .5) ? 1 : -1)

        state.tags.forEach((tag) => { state.colorsByTag[tag.label] = tag.color })
        console.log(state.tags)
        emitter.emit('update page count')
    }
}