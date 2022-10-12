const router = require("express").Router()

const {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas,
    hiddenTareas
} = require('../controllers/controladoresTareas')

router.get("/Tareas", getTareas)
router.post("/Tareas",postTareas)
router.put("/Tareas/:id", putTareas)
router.delete("/Tareas/:id", deleteTareas)
router.delete("/TareasOcultas/:id", hiddenTareas)

module.exports = router