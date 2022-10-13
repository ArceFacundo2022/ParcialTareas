const router = require("express").Router()
const{

getUsuarios,
getUsuariosById,
postUsuarios,
putUsuarios,
deleteUsuarios,
removeUsuarios,

}=require('../controllers/controladoresUsuarios')
const esAdmin = require('../middlewares/admin')
const validarJWT = require('../middlewares/validarJWT')


router.get("/usuario",getUsuarios)
router.get("/usuario/:idUsuario",[validarJWT],getUsuariosById)
router.post("/usuario",postUsuarios)
router.put("/usuario/:idUsuario",[validarJWT], putUsuarios)
router.delete("/usuario/:idUsuario",[validarJWT], deleteUsuarios)
router.delete("/usuarioDelete/:idUsuario",[validarJWT], removeUsuarios)


module.exports=router