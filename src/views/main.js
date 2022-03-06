var html = require('choo/html')
const tagSelector = require('./tagSelector.js')
var TITLE = 'hydra internet garden'

module.exports = view

 const tagEl = (tags) => tags? html`<span>${tags.map((tag) => html`<span class="bg-light-gray ma1">${tag}</span>`)}` : ''
const dateEl = (d) => d && d.length > 0 ? `(${d.slice(0, 4)})` : ''
const entry = (link) => html`<div class="mv2"><a href="${link.Link}" target="_blank">${link.Title} </a>  <span class="f7">${dateEl(link['Date Created'])} ${link["Short Description"]} ${tagEl(link["Tags"])} </span></div>`

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  const categories = groupBy(state.links, "Category")

  // const containsTag = state.tags.length > 0 ? (link) => {
  //   console.log(link)
  //   let b = false
  //   if(Array.isArray(link.Tags)) {
  //     link.Tags.forEach((tag) => {
  //       if(state.tags.indexOf(tag) > -1) {
  //         b = true
  //       }
  //     })
  //   }
  //   return b
  // } : () => true

  // ${state.currentResults.map(([key, links]) => html`<h4>${key}</h4>${
  //   links.filter(containsTag).map((link) => entry(link))
  // }`)}
  console.log('current results', state.currentResults)
  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
       <div>
        ${tagSelector(state, emit)}
       </div>
       <div>
       ${state.currentResults.map((l, i) => entry(l.link))}
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
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