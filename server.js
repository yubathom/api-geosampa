const version = require('./helpers').apiVersion

const jsonServer = require('json-server')
const server = jsonServer.create({
	readOnly: true
})

const views = require('./views.js')()
const router = jsonServer.router(views)

const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(`/${version}`,router)

server.listen(port)