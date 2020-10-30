//Modulos internos 
const mongoose = require("mongoose");

//Esquema 

const esquemaTablero = new mongoose.Schema({
    idUsuario: String, //luego vamos a ver como relacionar este ID con el de usuario 
    nombre: String,
    descipcion: String,
    sticker: String,
    fecha : {
        type:Date,
        default: Date.now,
    }
})

//Se crean los exports 
const Tablero = mongoose.model("tablero", esquemaTablero)
module.exports.Tablero = Tablero