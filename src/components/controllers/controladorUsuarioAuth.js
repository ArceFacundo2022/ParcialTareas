const Usuario = require('../models/modeloUsuarios')

const generarJwt = require('../helper/generarJWT')
const bcrypt = require('bcrypt')

const CtrlAuth = {}

CtrlAuth.login = async (req, res,next) => {
    const {usuario, contraseña} = req.body
try {
    //Verificar el usuario
    const user = await Usuario.findOne({usuario})

    if (!user) {
    return res.status(400).json({
        message: 'error al autenticar el usuario'
    })
    }

    //Verificar la contraseña
    const validPassword = bcrypt.compareSync(contraseña, user.contraseña)

    if (!validPassword) {
    return res.status(400).json({
        message: 'error al autenticar la contraseña'
    })
    }

    //Generar el token
    const token = await generarJwt({uid:user.id})
    return res.json({
        token
    })
}
catch (error) {
    return res.status(400).json({
        message : "Error al autenticar"
    })
}
}

module.exports = CtrlAuth