//modulos node
const express = require("express");
const router = express.Router();
//modulos internos 
const {Tablero} = require("../model/tablero")
const {Usuario} = require("../model/usuario")
const auth = require("../middleware/auth")
// Listar actividades
router.get("/lista", auth, async (req, res) =>{
    const usuario = await Usuario.findById(req.usuario._id)
    if(!usuario) return res.status(400).send("El usuario no existe")

    const tablero = await Tablero.find({idUsuario: req.usuario._id})//no es body sino usuario 
    res.send(tablero)
});
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
        descripcion: req.body.descripcion,
        estado: req.body.estado
    })
    //enviamos el resultado 
    const result = await tablero.save();
    res.status(200).send(result)
})
//Actualizar actividad 
router.put("/", auth, async (req, res) => {
    // Buscamos el usuario por id
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuario no existe
    if (!usuario) return res.status(400).send("El usuario no existe");
    // si el usuario existe
    const tablero = await Tablero.findByIdAndUpdate(
        req.body._id,
        {
            idUsuario: req.usuario._id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
        },
        {
            new: true,
        }
    );
    if (!tablero)
        return res.status(400).send("No hay actividad asignada a este usuario");
    res.status(200).send(tablero);
})
router.delete("/:_id", auth, async (req, res)=>{
    const usuario = await Usuario.findById(req.usuario._id)
    if(!usuario) return res.status(400).send("El usuario no existe")
    const tablero = await Tablero.findByIdAndDelete(req.params._id)
    if(!tablero) return res.status(400).send("No se encuentra actividad")
    res.status(200).send("actividad eliminada")
})

//al final 
module.exports = router