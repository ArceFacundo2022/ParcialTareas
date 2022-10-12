const Tarea = require("../models/modeloTareas")

const CtrlTarea = {}

CtrlTarea.getTareas = async (req,res) => {
    const tarea = await Tarea.find({isActive : true})

    return res.json({
        message: "Aqui estan las tareas Activas",
        tarea
    })
}

CtrlTarea.postTareas = async (req,res) => {
    const {titulo, descripcion, estado} = req.body
    const newTareas = new Tarea({
        titulo, descripcion, estado
    })

    const tarea = await newTareas.save()

    return res.json({
        message:"Tarea enviada con exito",
        tarea
    })
}

CtrlTarea.putTareas = async (req,res) => {

    const id = req.params.id
    const {titulo, descripcion, estado} = req.body

    try {
        await Tarea.findByIdAndUpdate(id,{titulo,descripcion,estado})
        const tarea = await Tarea.find({_id:id})

        return res.json({
            message:"Tarea actualizada con exito",
            tarea
        })


    } catch (error) {
        console.log(error)
        return res.json({
            message:"Nose pudo actualizar la tarea"
        })
    }
}

CtrlTarea.deleteTareas = async (req,res) => {
    const id=req.params.id
    try {
        await Tarea.findByIdAndRemove(id)
        return res.json({
            message : "Tarea Eliminada"
        })


    } catch (error) {
        console.log(error)
        return res.json({
            message:"Nose pudo remover la tarea"
        })
    }
}

CtrlTarea.hiddenTareas = async (req,res) => {
    const id = req.params.id
    try {
        await Tarea.findByIdAndUpdate(id,{isActive:false})
        return res.json({
            message : "La tarea fue ocultada con exito"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            message : "La tarea no se pudo ocultar"
        })
    }
}


module.exports = CtrlTarea