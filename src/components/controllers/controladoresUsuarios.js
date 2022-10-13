const Usuario = require("../models/modeloUsuarios")
const bcrypt = require("bcrypt")


const CtrlUsuarios={}

CtrlUsuarios.getUsuarios= async(req,res)=>{

    try{
        const user=await Usuario.find({isActive : true})

    return res.json({
        message:"Las usuarios activas son:",
        user

    })
    }
    catch(error){
        console.log(error)
        return res.json({
            message: "Error al buscar usuarios"
        })
    }
}

CtrlUsuarios.getUsuariosById= async(req, res)=>{
    try{
        const idUser = req.params.idUsuario
        const user=await Usuario.findOne({$and:[{_id: idUser},{isActive:true}]})
        if (!user){
            res.json({
                message: "Usuario no Activo o no existe"
            })
        }
        return res.json({
            message: "Usuario encontrado",
            user
        })
    }catch(error){
        console.log(error)
        return res.json({
            message: "Error al buscar usuarios"
        })
    }
}


CtrlUsuarios.postUsuarios= async(req,res)=>{

    try{
            const {usuario,correo,contraseña}=req.body
        const NewContraseña = bcrypt.hashSync(contraseña, 10)

        const newUsuario = new Usuario({
            usuario,correo,
            contraseña : NewContraseña
        })

        const user = await newUsuario.save()

        return res.json({
            message:"El usuario se a subido exitosamente",
            user

        })
    }
    catch(error){
        console.log(error)
        return res.json({
            message: "Error al subir el usuario"
        })
    }



}
CtrlUsuarios.putUsuarios= async(req,res)=>{
    const id=req.params.idUsuario

    const{usuario,correo,contraseña}=req.body


    try {
        
        if(!id || !contraseña || !correo || !usuario){
            return res.json({
                message: "Error al actualizar el usuario"
            })
        }
        if(id != req.user._id){
            return res.json({
                message: "Error no puedes actualizar la cuenta de otro usuario"
            })
        }
        const NewContraseña = bcrypt.hashSync(contraseña, 10)
        await Usuario.findByIdAndUpdate(id,{usuario,correo,contraseña : NewContraseña})
        const user = await Usuario.find({_id: id})

        return res.json({
        
            message:"Usuario actualizado",
            user

        })
    } catch (error) {
        return res.json({message:"No se pudo actualizar el usuario"})
    }


}



CtrlUsuarios.deleteUsuarios= async(req,res)=>{
    const id=req.params.idUsuario
    try {

        if(!id){
            return res.json({
                message: "No existe un id de usuario"
            })
        }

        if(id != req.user._id){
            return res.json({
                message: "Error no puedes ocultar la cuenta de otro usuario"
            })
        }
        await Usuario.findByIdAndUpdate(id,{isActive : false})
        const userD = await Usuario.find({_id: id})
        return res.json(
            {
                message:"Usuario oculto",
                userD
            }
        )
        
    } catch (error) {
        console.log(error)
        return res.json(
                    {
                        message:"No se pudo ocultar al usuario"
    })
}

}

CtrlUsuarios.removeUsuarios= async(req,res)=>{
    const id=req.params.idUsuario
    try {

        if(!id){
            return res.json({
                message: "No existe un id de usuario"
            })
        }

        if(id != req.user._id){
            return res.json({
                message: "Error no puedes borrar la cuenta de otro usuario"
            })
        }
        
        await Usuario.findByIdAndRemove(id)
        return res.json(
            {
                message:"Usuario Eliminada",
            }
        )
        
    } catch (error) {
        console.log(error)
        return res.json({ 
            message:"No se pudo borrar al usuario"
        })
    }

}

module.exports = CtrlUsuarios