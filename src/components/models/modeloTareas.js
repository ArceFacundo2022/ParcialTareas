const {Schema,model}=require('mongoose')



const TareaSchemas = new Schema ({


titulo:{
    type:
    String
},
descripcion:{type:
    String},

estado:{type:
    String},

isActive: {
    type: Boolean,
    default : true
},
role:{
    type:
    String
},
idUser:{
    type:
    Schema.ObjectId,
    ref: "usuario",
    required: true
}


},{
    versionKey:false,
    timestamps:true
})

module.exports =model("tareas",TareaSchemas)