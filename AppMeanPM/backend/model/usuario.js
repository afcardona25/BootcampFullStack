//Modulos Internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema 
const esquemaUsuario = new mongoose.Schema({
    nombre: {
        type: String,
    },
    cedula: {
        type: String,
    },
    edad : {
        type: Number,
    },
    correo: {
        type: String,
    },
    pass: {
        type: String,
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    }
});
//generar JWT
esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo,
    }, "clave")
}

//Creamos los exports 
const Usuario = mongoose.model("usuario", esquemaUsuario)
module.exports.Usuario = Usuario;

//solo se pone en caso de emergencia pero por ahora no se va a usar
module.exports.esquemaUsuario = esquemaUsuario;