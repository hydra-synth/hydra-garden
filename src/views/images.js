var html = require('choo/html')
const tagSelector = require('./tagSelector.js')
const pageSelector = require('./pageSelector.js')

// const tagSelector = require('./tagSelectorCategories.js')
var TITLE = 'garden-frontend - main'

module.exports = view

const tagEl = (tags) => html`<span>${tags.map((tag) => html`<span class="bg-gray ma1">${tag}</span>`)}`
// const entry = (link) => html`<div class="dib w5 mv2" >
// ${link.Image ? link.Image.map((image) => html`<img src="${image.thumbnails.large.url}"></img>`) : ''}
// <a href="${link.Link}" target="_blank">${link.Title} </a> ${parseMarkdown(link.Description)} 
// </div>`


const getStyle = ({link, selected, transition = 'none'}, {width,  top, left}) => `
position: absolute; 
top:${top}px; 
left:${left}px; 
box-shadow: 2px 2px 20px black;
transition: ${transition};
width:${width}px;
max-height: ${window.innerHeight - 200}px;
cursor:move;
pointer-events: ${transition == 'none'? 'none': 'all'};
overflow-y: auto;
background-color: ${link.color? link.color : '#eee'}
`

const content = ({ selected, link}) => selected ? html`
<div class="pa3">
  <div class="f5 dim b"><a href="${link.Link}" target="_blank">${link.Title} </a></div>
  <a class="" href="${link.Link}" target="_blank">
  <img style="" src="${link.Image[0].thumbnails.large.url}"/>
  </a>
  <div class="f6">${link['Short Description']}</div>
  <div class="f6">${link['Description']}</div>
  <div>${tagEl(link.Tags)}</div>
</div>
` : html`<img style="" src="${link.Image[0].thumbnails.large.url}"/>
<div class="f6">${link.Title}</div>`

const floatingImage = (opts, {onclick, onmousedown, onmouseup} = {}) => {
const { link, id, selected, layout, selectedLayout } = opts
 return link.Image ? html`<div 
  class="bg-light-gray" 
  onclick="${onclick}"
  onmousedown="${onmousedown}"
  onmouseup="${onmouseup}"
  id="${id}"
  style="${getStyle(opts, selected == true ? selectedLayout: layout)}">
 ${content(opts)}
</div>` : ''
}

//style="position: absolute; top:${Math.random() * window.innerHight}px; left:${Math.random() * window.innerWidth}px"
//  <div class="flex flex-wrap">
function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="lh-copy w-100 h-100" style="font-family: 'Space Mono', monospace;">
      <main class="pa0 cf center w-100 h-100" style="pointer-events:${state.isDragging?'none':'all'}" >
        <div class="bg-red w-100 h-100 absolute" style="background:linear-gradient(${state.colors.join(',')});transition:background-color 1s;" onclick=${(e) => emit('clear selection')} ></div>
        ${pageSelector(state, emit)}
        ${tagSelector(state, emit)}
      
        ${state.filteredLinks.visible.map((l, i) => floatingImage(l, {
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

	const span =  html`<span class="f6"></span>`
  span.innerHTML = htmlText.trim()
  return span
}