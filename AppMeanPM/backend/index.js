//modulos node
const express = require("express");
const mongoose = require("mongoose");
//modulos internos 
const usuario = require("./routes/usuario")
const auth = require("./routes/auth")
const tablero = require("./routes/tablero")
//App
const app = express();
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth)
app.use("/api/tablero/", tablero)
//puerto para ejecutar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en puerto " + port))
//conexion con mongo
mongoose.connect("mongodb://localhost/scrum", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("conexión a MongoDB: Online"))
    .catch((error)=>console.log("conexión a MongoDB: fallida"));
