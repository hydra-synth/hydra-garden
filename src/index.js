// var css = require('sheetify')
var choo = require('choo')

// css('tachyons')

var app = choo({ hash: true })
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}
app.use(require('./stores/tags'))
app.use(require('./stores/links'))

app.route('/', require('./views/images'))
app.route('/index.html', require('./views/images'))

app.route('#images', require('./views/images'))

app.route('/garden', require('./views/images'))
// app.route('/hydra-links/index.html', require('./views/main'))
// app.route('/hydra-links/index.html/#images', require('./views/images'))
// app.route('/hydra-links/images', require('./views/images'))
// app.route('/*', require('./views/404'))

module.exports = app.mount('body')
