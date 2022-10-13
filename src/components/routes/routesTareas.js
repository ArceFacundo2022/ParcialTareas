const router = require("express").Router()
const{

getTareas,
getTareasById,
postTareas,
putTareas,
deleteTareas,
removeTareas

}=require('../controllers/controladoresTareas')
const esAdmin = require("../middlewares/admin")
const validarJWT = require("../middlewares/validarJWT")



router.get("/tareasTodas",getTareas)
router.get("/tareas",[validarJWT], getTareasById)
router.post("/tareas",[validarJWT],postTareas)
router.put("/tareas/:idTarea",[validarJWT],putTareas)
router.delete("/tareas/:idTarea",[validarJWT],deleteTareas)
router.delete("/tareasDelete/:idTarea",[validarJWT],removeTareas)


module.exports=router