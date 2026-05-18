const {Componente, Producto} = require('../db/models')

const findAll = async (_,res) => {
    const data = await Componente.findAll({})
    res.status(200).json(data)
}

const findByPk = async (req, res) => {
    const id = req.params.id
    const data = await Componente.findByPk(id)

    res.status(200).json(data)
}

const findWithProductosById = async (req, res) => {
    const id = req.params.id
    const data = await Componente.findOne({
        where: {id},
        include: [
            {
                model: Producto,
                as: "productos",
                through: {
                    attributes: []
                }
            },
        ]
    })
    res.status(200).json(data)
}

const createComponente = async (req, res) => {
    const data = req.body
    const record = await Componente.create(data)

    res.status(201).json(record)
}

const createComponenteProducto = async (req, res) => {
    const data = req.body
    const record = await Componente.create({
        nombre: data.nombre,
        descripcion: data.descripcion,
    })


    for (i = 0; i < data.productos.length; i++){
        await record.createProducto(data.productos[i])
    }

    res
     .status(201)
     .json({...record.dataValues, prodcutos: await record.getProductos({joinTableAttributes:[]})})
}

module.exports = { 
    findAll, 
    findByPk, 
    findWithProductosById, 
    createComponente, 
    createComponenteProducto
}