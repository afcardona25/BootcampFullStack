//modulo node 
const jwt = require("jsonwebtoken");
//Creamos validacion para identificar el usuario logueado y y todos sus procesos 
function auth(req, res, next){
    let jwtToken = req.header("Authorization");

    jwtToken = jwtToken.split(" ")[1];

    if(!jwtToken) return res.status(405).send("No hay token para un acceso")

    try {
        const payload = jwt.verify(jwtToken, "clave");
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(405).send("Token sin autorizacion")
    }
}
//exports 
module.exports = auth;
