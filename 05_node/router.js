const ProductManager = require("./data/fs/ProductManager.js")
const UserManager = require("./data/fs/UserManager.js")
const gestorDeProductos = new ProductManager()
const gestorDeUsuarios = new UserManager()

async function router(req, res) {
    const url = req.url
    const option = { "content-type": "text/plain" }
    switch (url) {
        case "/products":

            const products = await gestorDeProductos.read()
            res.writeHead(200, option).end(JSON.stringify(products))

            break;
        case "/users":

            const users = await gestorDeUsuarios.read()
            res.writeHead(200, option).end(JSON.stringify(users))

            break;
        /*case "/home":
        res.writeHead(200,option).end("ESTA ES LA PAGINA HOME")
        
        break;
        case "/index":
        res.writeHead(200,option).end("ESTA ES LA PAGINA INDEX")
        
        break;*/

        default:
            res.writeHead(404, option).end("RUTA NO ENCONTRADA")
            break;
    }
}

module.exports = router;