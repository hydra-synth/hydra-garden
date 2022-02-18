var html = require('choo/html')


// const listTags = (links) => {
//     const allTags =  links.reduce((prev, next) => prev.concat(next.Tags), [])
//     return allTags.filter((item, index) => allTags.indexOf(item) === index)
//   }

  const style = (tag) => {
    if(tag.selected === true) return `color:black;background-color:${tag.color};`
    return `background-color:black;color:${tag.color};`
  }

  module.exports = (state, emit) => {
      return html`<div>
      ${state.tags.map((tag, i) => html`<div class="f7 dib pa1 ma0 ba pointer dim" style=${style(tag)} onclick=${() => emit('toggle tag', i)}>${tag.label}</div>`)}
     </div>`
  }