const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI) 
        console.log('Conectado a la DB')
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;