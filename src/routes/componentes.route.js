const { Router } = require('express')
const {
    findAll, 
    findByPk, 
    findWithProductosById, 
    createComponente,
    createComponenteProducto,
} = require('../controllers/componentes.controller')

const route = Router()


route.get('/', findAll)
route.get('/:id', findByPk)
route.get('/:id/producto', findWithProductosById)

route.post('/', createComponente)

route.post('/create-producto', createComponenteProducto)

module.exports = route