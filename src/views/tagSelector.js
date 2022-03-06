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
    <div class="flex relative items-start pa4">
    <div class="f6">
    ${title(state, emit)}
    </div>
    <div class="flex flex-wrap relative pa1">
      ${state.tags.map((tag, i) => html`<div class="f7 pa1 ph1 ma0 pointer dim" style=${style(tag)} onclick=${() => emit('toggle tag', i)}>${tag.label}</div>`)}
    </div>
     </div>`
  }