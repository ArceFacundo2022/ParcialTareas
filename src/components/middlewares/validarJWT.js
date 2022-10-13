const jwt = require('jsonwebtoken');

const Usuario = require("../models/modeloUsuarios");

const validarJWT = async (req, res, next) => {
    let token = req.headers.authorization

    //verifica si es que existe el token en la peticion
    if (!token) {
        return res.status(401).json({
            message: "No se encontro un token en la peticion"
        });
    }

    try {
        //Se valida el token
        const {uid} = await jwt.verify(token, process.env.SECRET)
        
        //Se busca el usuario en la db
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                message: "Usuario no encontrado"
            })
        }

        if (!usuario.isActive) {
            return res.status(401).json({
                message: "Usuario NO esta activo"
            })
        }

        //Se añade la informacion del usuario al req
        req.user = usuario;

        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "Error de autenicacion del Token"
        })
    }
}

module.exports = validarJWT