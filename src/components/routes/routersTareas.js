const router = require("express").Router()

const {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
} = require('../controllers/controladoresTareas')

router.get("/Tareas", getTareas)
router.post("/Tareas",postTareas)
router.put("/Tareas/:id", putTareas)
router.delete("/Tareas/:id", deleteTareas)

module.exports = router