var html = require('choo/html')
const tagSelector = require('./tagSelector.js')
var TITLE = 'garden-frontend - main'

module.exports = view

const tagEl = (tags) => html`<span>${tags.map((tag) => html`<span class="bg-light-gray ma1">${tag}</span>`)}`
const entry = (link) => html`<div class="dib w5 mv2" >
${link.Image ? link.Image.map((image) => html`<img src="${image.thumbnails.large.url}"></img>`) : ''}
<a href="${link.Link}" target="_blank">${link.Title} </a> ${parseMarkdown(link.Description)} 
</div>`

const rand = (min=0, max=1) => min + Math.random() * (max - min)

const floatingImage = ({link, width, id, top, left, transition = 'none'}, {onclick, onmousedown, onmouseup} = {}) => link.Image ? html`<div 
  class="bg-light-gray ba" 
  onclick="${onclick}"
  onmousedown="${onmousedown}"
  id="${id}"
  style="
    position: absolute; 
    top:${top}px; 
    left:${left}px; 
    box-shadow: 2px 2px 20px black;
    transition: ${transition};
    width:${width}px;
    cursor:move;
  ">
  <img style="" src="${link.Image[0].thumbnails.large.url}"/>
  <div class="f7">${link.Title}</div>
</div>` : ''
//style="position: absolute; top:${Math.random() * window.innerHight}px; left:${Math.random() * window.innerWidth}px"
//  <div class="flex flex-wrap">
function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa0 cf center">
        ${tagSelector(state, emit)}
      
        ${state.currentResults.map((l, i) => floatingImage(l, {
          onclick: (e) => {emit('image:click', i, e)},
          onmousedown: (e) => {emit('image:mousedown', i, e)},
          onmouseup: (e) => {emit('image:mouseup', i, e)},
        }))}
      </main>
    </body>
  `
}

function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
	//	.replace(/\n$/gim, '<br />')

	const span =  html`<span class="f7"></span>`
  span.innerHTML = htmlText.trim()
  return span
}