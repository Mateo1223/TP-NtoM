const { Router } = require('express')
const {findAll, findByPk} = require('../controllers/fabricantes.controller')
const route = Router()


route.get('/', findAll)
route.get('/:id', findByPk)



module.exports = route