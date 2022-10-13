const {Schema,model}=require('mongoose')



const UsuarioSchemas = new Schema ({


usuario:{
    type:
    String,
    required: true
},
correo:{
    type:
    String,
    required: true
},
contraseña:{
    type:
    String,
    required: true
},
isActive:{
    type:
    Boolean,
    default: true
},
role:{
    type:
    String,
    default : "user"
}

},{
    versionKey:false,
    timestamps:true
})

module.exports = model("usuarios",UsuarioSchemas)