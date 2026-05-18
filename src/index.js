const express = require('express')
const init = require('./init')
const componenteRoute = require('./routes/componentes.route')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/componente', componenteRoute)



app.listen(PORT, async(err) => {
    if(err){
        console.error(err.message)
        process.exit(1)
    }
    await init();
    console.log(`Aplicacion iniciada correctamente en el puerto ${PORT}`)
})