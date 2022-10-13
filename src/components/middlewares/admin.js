const esAdmin = (req, res, next) => {
    if (req.user.role !== 'admin'){
        return res.status(403).json({
            message: "No tienes los permisos para realizar la accion"
        })
    }

    next()

}

module.exports = esAdmin
