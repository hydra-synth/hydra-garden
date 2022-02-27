var Airtable = require('airtable')
// read-only API key from rhizomaticode
var base = new Airtable({ apiKey: 'keyRHmFMa5W4S4TUJ' }).base('app1AzaEIEVOFm3nN')
module.exports = store

function store(state, emitter) {
  state.links = [] // all links

  state.tags = []

  state.currentResults = [] 

  state.drag = { x: 0, y: 0 }

  window.addEventListener('resize', () => {
    updateResults()
    emitter.emit('render')
  })

  emitter.on('navigate', () => {
    console.log(`Navigated to ${state.route}`)
  })

  emitter.on('image:mousedown', (i, e) => {
    e.preventDefault()
    const el = state.currentResults[i]
    el.transition = 'none'
    bringToFront(i)
    state.drag.x = e.clientX
    state.drag.y = e.clientY
    state.drag.el = el
    document.onmousemove = dragElement
    document.onmouseup = stopDrag
  })

  function stopDrag () {
    state.drag.el.transition = 'all 1s'
    document.onmousemove = null
    document.onmouseup = null
  }

  function dragElement(e) {
    e.preventDefault()
    const el = state.drag.el
    const x = state.drag.x - e.clientX
    const y = state.drag.y - e.clientY
    state.drag.x = e.clientX
    state.drag.y = e.clientY
    el.top = el.top - y
    el.left = el.left - x
    emitter.emit('render')
  }

  function bringToFront(i) {
    const el = state.currentResults[i]
    state.currentResults.splice(i, 1)
    //console.log(newResults, )
    state.currentResults.push(el)
    emitter.emit('render')
  }

  emitter.on('image:click', (i) => {
    bringToFront(i)
   // state.currentResults = newResults
    //emitter.emit('render')
    console.log('clicked on image', state.currentResults, i)
  })

  emitter.on('toggle tag', (tagIndex) => {
    state.tags[tagIndex].selected = ! state.tags[tagIndex].selected
    filterResultsByTags()
    emitter.emit('render')
  })

  function filterResultsByTags () {
    const tags = state.tags.filter((tag) => tag.selected).map((tag) => tag.label)
    state.currentResults = state.links.filter((link) => {
      let containsTag = false
      link.Tags.forEach((t) => {
        if(tags.indexOf(t) > -1) containsTag = true
      })
      return containsTag
    }).map((link, i) => ({
      link: link,
      width: rand(100, 350),
      top: Math.random() * window.innerHeight,
      left: Math.random() * (window.innerWidth - 300),
      transition: 'all 1s',
      id: `link-${i}`
    }))
    updateResults()
    emitter.emit('render')
    console.log('tags are', tags)
  }

  // update tags currently shown
  function updateTags () {
    const allTags =  state.links.reduce((prev, next) => prev.concat(next.Tags), [])
    const filteredTags = allTags.filter((item, index) => allTags.indexOf(item) === index)
    state.tags = filteredTags
    .map((tag, i) => ({
      label: tag, 
      selected: false, 
      color: `hsl(${360*i/filteredTags.length}, 100%, 70%)`
    }))
    updateResults()
  }

  const rand = (min=0, max=1) => min + Math.random() * (max - min)

  function updateResults() {
    state.currentResults.forEach((link, i) => {
      link.width = rand(200, 350)
      link.top=  Math.random() * window.innerHeight
      link.left = Math.random() * (window.innerWidth - 300),
      link.transition = 'all 1s'
    })
  }

  base('Links').select({
    // Selecting the first 50 records in Grid view:
    // maxRecords: 1000,
    pageSize: 100,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    state.links = state.links.concat(records.map((record) => record.fields)).sort((a, b) => Math.random)
    console.log('records', records, state.links)
    state.currentResults = state.links.map((link, i) => ({
      link: link,
      width: rand(100, 350),
      top: Math.random() * window.innerHeight,
      left: Math.random() * (window.innerWidth - 300),
      id: `link-${i}`
    }))
    fetchNextPage()
    updateTags()
    emitter.emit(state.events.RENDER)
  }, function done(err) {
    if (err) { console.error(err); return; }
  })

  //   const DATA_URL = `${window.location.origin}/json`
  //   fetch(DATA_URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     state.links = data 
  //     console.log(state.links)
  //     emitter.emit(state.events.RENDER)
  //   });
}
