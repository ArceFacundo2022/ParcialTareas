const router = require("express").Router()
const{

postComent,
getComent

}=require('../controllers/controladoresComent')
const esAdmin = require("../middlewares/admin")
const validarJWT = require("../middlewares/validarJWT")


router.post("/coment",[validarJWT],postComent)
router.get("/coment",getComent)


module.exports=router