const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

//middlewares
app.use(express.json())

app.listen(port, () => {
    console.log(`El servidor corriendo en el puerto ${port}`)
})