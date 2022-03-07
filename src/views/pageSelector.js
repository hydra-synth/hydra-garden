const html = require('choo/html')

module.exports = (state, emit) =>  {
  const l = state.filteredLinks
  const style = (i) => i === l.currPage ? "" : "dim pointer underline"
  return  html`<div class="h2 f7 justify-end relative flex">
    <div></div>
    ${l.totalPages > 1? new Array(l.totalPages).fill(0).map((_, i) => html`
        <div class="pa2 ${style(i)}" onclick=${() => emit('set page', i)}>${i}</div>
    `) : ''}
</div>
`}