const init = async() => {
    const db = require('./db/models').sequelize;

    const {Componente, Producto, Fabricante} = require('./db/models')

    // esta linea es solo para sincronizar modelos en desarrollo
    await db.sync({force:true});
    
    const c1 = await Componente.create({
        nombre: "Componenente1",
        descripcion: "Descripcion Componente 1"
    })

    const c2 = await Componente.create({
        nombre: "Componenente2",
        descripcion: "Descripcion Componente 2"
    })

    const p1 = await Producto.create({
        nombre: "Producto1",
        descripcion: "Descripcion Producto 1",
        precio: 100.00,
        pathImg: "https://dasdas/images/p1"
    })

    const p2 = await Producto.create({
        nombre: "Producto2",
        descripcion: "Descripcion Producto 2",
        precio: 100.00,
        pathImg: "https://dasdas/images/p2"
    })

    const f1 = await Fabricante.create({
        nombre: "Fabricante1",
        direccion: "Direccion Fabricante1",
        numeroContacto: "1122334455",
        pathImgPerfil: "https://dasdas/images/f1"

    })

    const f2 = await Fabricante.create({
        nombre: "Fabricante2",
        direccion: "Direccion Fabricante2",
        numeroContacto: "1122334455",
        pathImgPerfil: "https://dasdas/images/f2"

    })

    await p1.addComponentes([c1,c2])
    await c1.addProducto(p2)
    await c2.addProducto(p2)
    
    await f1.addProductos([p1,p2])
    await f2.addProductos([p1,p2])

}

module.exports = init