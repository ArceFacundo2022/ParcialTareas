const express = require('express')
const cors = require('cors')
require('dotenv').config()

//conexion con la base de datos
const conect = require("./conexion")
conect()

const app = express()

const port = process.env.PORT || 5000

//middlewares
app.use(cors())
app.use(express.json())

//RUTAS
app.use(require("./components/routes/routersTareas"))


//Iniciar el servidor en el puerto deseado
app.listen(port, () => {
    console.log(`El servidor corriendo en el puerto ${port}`)
})