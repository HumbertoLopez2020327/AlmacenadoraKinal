'use strict'

const { default: mongoose } = require("mongoose")
const moongoose = require("mongoose")
const Schema = mongoose.Schema;

const AlmacenadoraSchema = Schema({
       Name:{
          type:String,
          required: true
       },
       Apellido:{
         type: String,
         required: true
       },
       NombreTarea:{
         type: String,
         required: true
       },
       DescripcionTarea:{
         type:String,
         required: true
       },
       FechaInicio:{
        type: Date,
        required: true
       },
       FechaCierre:{
        type:Date,
        required: true
       },
       EstadoTarea:{
        type:String,
        required: true
       },
});

module.exports = moongoose.model('almacenadora', AlmacenadoraSchema);