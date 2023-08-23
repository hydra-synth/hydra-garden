const { rand } = require('./../lib/util.js')

const Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'pateIuSbF1loZff0A.c294094b7c92945f18221d417669da78f3718514ec4f8ae98c42e2bc81f624ba'
});

// read-only API key from rhizomaticode
const base = Airtable.base('app1AzaEIEVOFm3nN');
module.exports = store

function store(state, emitter) {
  state.links = [] // all unfiltered links
  // all current search results
  // state.filteredLinks.visible = []

  // search results split into pages
  state.filteredLinks = {
    pageSize: 15,
    currPage: 0,
    totalPages: 0,
    all: [],
    visible: []
  }
  
  // emitter.on('navigate', () => {
  //   console.log(`Navigated to ${state.route}`)
  // })

  emitter.on('set page', (page) => {
    setPage(page)
    emitter.emit('render')
  })

  emitter.on('update page count', (page) => {
    updatePageCount()
  })

  function setPage(index = 0) {
    const l = state.filteredLinks
    if(index < l.totalPages) l.currPage = index
    l.visible = l.all.slice(l.pageSize*l.currPage, l.pageSize*(l.currPage+1))
    emitter.emit('update link layout')

  }

  function updatePageCount() {
    const l = state.filteredLinks
    l.totalPages = Math.ceil(l.all.length/l.pageSize)
    if(l.currPage > l.totalPages) l.currPage = 0
    setPage(0)
  }


  base('Links').select({
    // Selecting the first 50 records in Grid view:
    // maxRecords: 1000,
    pageSize: 100,
    view: "Grid view",
  //   filterByFormula: `OR(
  //     FIND("performance", Type) > 0,
  //     FIND("net art", Type) > 0
  // )`
  }).eachPage(function page(records, fetchNextPage) {
    state.links = state.links.concat(records.map((record) => record.fields)).sort((a, b) => Math.random)
    console.log('records', records, state.links)
    state.filteredLinks.all = state.links.map((link, i) => ({
      link: link,
      // id: `link-${i}`,
      selected: false
    })).sort(() => (Math.random() > .5) ? 1 : -1)

     fetchNextPage()
     updatePageCount()
    emitter.emit('update tags')
    // emitter.emit('update link layout')
    emitter.emit(state.events.RENDER)
  }, function done(err) {
    if (err) { console.error(err); return; }
  })
}
