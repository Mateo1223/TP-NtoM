const { Router } = require('express')
const {findAll, findByPk} = require('../controllers/productos.controller')
const route = Router()


route.get('/', findAll)
route.get('/:id', findByPk)

route.post('/', createProducto)

route.put('/:id', modifyProdcutoById)


route.delete('/:id', deleteProductoById)

module.exports = route