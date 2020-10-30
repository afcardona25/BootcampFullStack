//modulos node
const express = require("express");
const router = express.Router();
//modulos internos 
const {Tablero} = require("../model/tablero")
const {Usuario} = require("../model/usuario")
const auth = require("../middleware/auth")
//Ruta
router.post("/", auth, async(req, res)=>{
    //obtenemos el id del usuario autenticado
    const usuario = await Usuario.findById(req.usuario._id);
    //si el usuario no existe
    if(!usuario) return res.status(400).send("El usuario no existe");
    //si el usuario existe creamos una actividad 
    const tablero = new Tablero({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    })
    //enviamos el resultado 
    const result = await tablero.save();
    res.status(200).send(result)
})
//al final 
module.exports = router