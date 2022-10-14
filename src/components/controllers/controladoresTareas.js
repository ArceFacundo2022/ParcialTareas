const Tarea = require("../models/modeloTareas")


const CtrlTarea={}

CtrlTarea.getTareas= async(req,res)=>{
    try {
        const tarea=await Tarea.find({isActive : true})

        return res.json({
            message:"Las tareas activas son:",
            tarea
    
        })
    }catch(err){
        return res.json({
            message: "Error al mostrar la tareas"
        })
    }

}



CtrlTarea.getTareasById = async(req,res)=>{
    try {
        const idUser = req.user._id
        const tarea = await Tarea.find({$and: [{idUser: idUser},{isActive: true}]})
        
        return res.json({
            message: "La tarea se a encontrado",
            tarea
        })
    }
    catch(error){
        return res.json({
            message: "Error al encontrar la tarea"
        })
    }
}



CtrlTarea.postTareas= async(req,res)=>{
    try {
        const idUser = req.user._id
        const userName = req.user.usuario
        const {titulo,descripcion,estado}=req.body

        if (!idUser || !titulo || !descripcion || !estado){
            return res.status(400).json({
                message: "Error al cargar la tarea"
            })
        }
        console.log(userName)
        const newTareas = new Tarea({
        idUser,userName,titulo,descripcion,estado
    })

    const tarea = await newTareas.save()

    return res.json({
        message:"La tarea se a subido exitosamente",
        tarea

    })

    }catch (error){
        return res.json({
                    message: "Error al subir la tarea"
    })

    }


}
CtrlTarea.putTareas= async(req,res)=>{

        const idTarea =req.params.idTarea
        const idUser2 =req.user._id.toString()

    const{estado}=req.body


    try {

        const id = await Tarea.findById(idTarea)
        console.log(`${id.idUser.toString()} || ${idUser2} || ${id.idUser.toString() != idUser2}`)

        if(id.idUser.toString() != idUser2 || req.user.role === "admin"){
            return res.json({
                message: "Error no puedes actualizar la tarea de otro usuario"
            })
        }

        await Tarea.findByIdAndUpdate(id._id,{estado})
            const tarea = await Tarea.find({_id: id._id})

            return res.json({
        
                message:"Estado actualizado",
                tarea
    
            })

    }catch (error){
        return res.json({
            message: "Error al actualizar la tarea"
        })
    }


}



CtrlTarea.deleteTareas= async(req,res)=>{
    const idTarea=req.params.idTarea
    const idUsuario=req.user._id.toString()
    try {
        const id = await Tarea.findById(idTarea)


        if ((id.idUser.toString() != idUsuario) || req.user.role === "admin"){
            return res.json({
                message: "Error no puedes ocultar la tarea de otro usuario"
            })
        }
            await Tarea.findByIdAndUpdate(id._id,{isActive : false})
            const tareaD = await Tarea.find({_id: id._id})
            return res.json(
            {
                message:"Tarea oculta",
                tareaD
            }
        )
        
    } catch (error) {
        return res.json({
            message: "Error ocultar la tarea"
        })
    }

}

CtrlTarea.removeTareas= async(req,res)=>{
    const idTarea=req.params.idTarea
    const idUsuario=req.user._id.toString()
    try {
        const id = await Tarea.findById(idTarea)


        if ((id.idUser.toString() != idUsuario) || req.user.role === "admin"){
            return res.json({
                message: "Error no puedes eliminar la tarea de otro usuario"
            })
        }
        await Tarea.findByIdAndRemove(idTarea)
        return res.json(
            {
                message:"Tarea Eliminada",
            }
        )
        
    } catch (error) {
        return res.json({
            message: "Error al eliminar la tarea"
        })
    }

}




module.exports=CtrlTarea