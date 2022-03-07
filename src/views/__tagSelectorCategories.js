var html = require('choo/html')
const title = require('./title.js')

// const listTags = (links) => {
//     const allTags =  links.reduce((prev, next) => prev.concat(next.Tags), [])
//     return allTags.filter((item, index) => allTags.indexOf(item) === index)
//   }

  const style = (tag) => {
    //if(tag.selected === false) return `color:black;background-color:${tag.color};`
    //return `background-color:black;color:${tag.color};`
    if(tag.selected === false) return `color:black;text-decoration:underline`
    return `background-color:black;color:${tag.color};text-decoration:underline`
  }

  module.exports = (state, emit) => {
      return html`
    <div class="flex relative">
     ${title}
      <div class="relative f7 flex flex-column">
      Filter by:
      ${state.select.map(({ field, options}) => html`<div class="flex flex-row flex-wrap">
      <div class="pa1 ma0 ttu">${field}</div>
      ${options
        .map((tag, i) => html`
        <div class="f7 pa1 ph1 ma0 pointer dim" style=${style(tag)} onclick=${() => emit('toggle category tag', field, i)}>${tag.label}</div>
        `)}
      </div>
    </div>`)}
       <div class="dim pa1">LANGUAGES</div>
       <div class="dim pa1">LOCATIONS</div>
       <div class="dim pa1">YEARS</div>
     </div>`
  }