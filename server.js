
const jsonServer = require("json-server")

const server = jsonServer.create()

const middlewares = jsonServer.defaults()
server.use(middlewares)

const allowAccessFromAnyWhere = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
}
server.use(allowAccessFromAnyWhere)

const router = jsonServer.router("db.json")

server.use(router)

const PORT = 5005

server.listen(PORT, () => {
    console.log(`Servidor JSON andando! en el puerto ${PORT}`)
    console.log(`Acceso local en: http://localhost:${PORT}`)
})