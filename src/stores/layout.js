const { rand } = require('./../lib/util.js')

module.exports = function (state, emitter) {
    state.drag = { x: 0, y: 0 }

    state.layout = {
        marginTop: 200
    }

    state.colors = ['red']

    state.isDragging = false

    state.colorsByTag = {}

    window.addEventListener('resize', () => {
        updateLinkLayout()
        emitter.emit('render')
    })

    emitter.on('update link layout', () => {
        updateLinkLayout()
    })

    emitter.on('clear selection', () => {
        state.filteredLinks.visible.forEach((el) => el.selected = false)
        emitter.emit('render')
    })

    emitter.on('image:mousedown', (i, e) => {
        e.preventDefault()
        const el = state.filteredLinks.visible[i]
        bringToFront(i)
        state.drag.x = e.clientX
        state.drag.y = e.clientY
        state.drag.el = el
        document.onmousemove = dragElement
        document.onmouseup = stopDrag
        emitter.emit('render')
    })

    function stopDrag() {
        state.drag.el.transition = 'all 1s'
        document.onmousemove = null
        document.onmouseup = null
        state.isDragging = false
        emitter.emit('render')
    }



    function dragElement(e) {
        e.preventDefault()
        state.isDragging = true
        const el = state.drag.el
        el.transition = 'none'
        const x = state.drag.x - e.clientX
        const y = state.drag.y - e.clientY
        state.drag.x = e.clientX
        state.drag.y = e.clientY
        if (el.selected) {
            el.selectedLayout.top = el.selectedLayout.top - y
            el.selectedLayout.left = el.selectedLayout.left - x
        } else {
            el.layout.top = el.layout.top - y
            el.layout.left = el.layout.left - x
        }
        emitter.emit('render')
    }

    function bringToFront(i) {
        const el = state.filteredLinks.visible[i]
        state.filteredLinks.visible.splice(i, 1)
        //console.log(newResults, )
        state.filteredLinks.visible.push(el)
    }

    function setSelected(i) {
        state.filteredLinks.visible.forEach((el) => el.selected = false)
        const el = state.filteredLinks.visible[i]
        el.selected = true
        // const width = Math.min(600, window.innerWidth)
        // if (el.left + width > window.innerWidth) {
        //   el.left = rand(10, window.innerWidth - width - 10)
        // }
        // if (el.top > window.innerHeight / 3) el.top = rand(20, window.innerHeight / 3)
    }

    emitter.on('image:click', (i) => {
        bringToFront(i)
        setSelected(state.filteredLinks.visible.length - 1)
        emitter.emit('render')
    })


    function updateLinkLayout() {
       // console.log('updating layout', state)
        const length = state.filteredLinks.visible.length
        const _w = 700
        let w = length > 8 ? (length > 12 ? rand(_w / 6, _w / 5) : rand(_w / 4, _w / 3)) : rand(_w / 2, _w / 3)
        state.filteredLinks.visible.forEach((link, i) => {
           // console.log('filtered', link)

            const width = link.selected ? Math.min(500, window.innerWidth) : w

            link.transition = 'all 1s'
            // default layout of the link
            link.layout = {
                width: w,
                top: Math.random() * (window.innerHeight - 200 - state.layout.marginTop) + state.layout.marginTop,
                left: Math.random() * (window.innerWidth - 300),
            }
            link.id = `link-${i}`
            if (link.layout.left + width > window.innerWidth) {
                link.layout.left = rand(10, window.innerWidth - width - 10)
            }

            const selectedWidth = Math.min(500, window.innerWidth)
            // layout of the link when selected
            link.selectedLayout = {
                width: selectedWidth,
                top: rand(20, window.innerHeight / 3),
                left: link.layout.left
            }

            if (link.selectedLayout.left + selectedWidth > window.innerWidth) {
                link.selectedLayout.left = rand(10, window.innerWidth - selectedWidth - 10)
            }
          //  console.log('finished updating layout')
            // if (link.selected && link.layout.top > window.innerHeight / 3) link.layout.top = rand(20, window.innerHeight / 3)
        })
    }
}