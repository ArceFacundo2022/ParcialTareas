const express=require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()


const conexion =require("./conexion")
conexion()


const app=express()

//configuracion
const port = process.env.PORT || 3000;


//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//RUTAS
app.use(require("./components/routes/routesTareas"))
app.use(require("./components/routes/routesUsuarios"))
app.use(require("./components/routes/routesAuthUsu"))


app.listen(port,()=>{
    console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO ${port}`)
})