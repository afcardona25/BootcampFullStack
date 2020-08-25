/*
//Obtener elementos por su ID
var boton = document.getElementById("btn")
console.log("este es el botón", boton)
//El código se detiene al encontrar un alert. Es necesario que el usuario cierre el alert cuando aparezca para que el código se siga leyendo
alert("Bienvenidos")
var nombre = prompt("Cual es tu nombre", "Pedro Pérez")
// Cuando quiero unir varias cosas en un alert debo usar el +. los espacios que separen cosas en el alert deben estar incluidos en un string
alert("Bienvenido " + nombre)
//cuando el js hace cambios o escribe en el html lo hace sobre la representación no sobre el html "real"

document.write("Hello World")

var respuesta = confirm("¿está seguro de querer continuar?")
//dependiendo de la respuesta del usuario el método confirm arroja un bool 
console.log(respuesta)
var apodo = prompt("Cuál es tu apodo", "Pepito")
var mensaje = "Mi nombre es " + nombre + ", pero mi apodo es '" + apodo + "'"
var mensaje = `Mi nombre es ${nombre}, pero mi apodo es ${apodo}`
console.log(mensaje)
alert(mensaje)

//la interpolacion de string se hace así SIEMPRE CON LA COMILLA ``
//let myPet = 'seahorse';
//console.log(`My favorite animal is the ${myPet}.`);

*/

// Event listener desde botón en HTML
function pedirNombre(){
    nombre = prompt("Cual es tu nombre", "Pedro Pérez")

    console.log(nombre)
}
/*var btnApodo = document.querySelector('#botonApodo')
console.log("Este es el boton del apodo "+btnApodo)
//aquí se usará una funcion callback (esta funcion tmbien podría guardarse en una variable y hacerla tipo flecha)
btnApodo.addEventListener('click', ()=>{
    var apodo = prompt("Cuál es tu apodo", "Pepito")
    mensaje = `Mis apodo es ${apodo}`
    console.log(mensaje)
})*/
function pedirApodo(){
    apodo = prompt("Cual es tu apodo", "Pepito")

    console.log(apodo)
}

function mensaje(){
    var mensaje = `Mi nombre es ${nombre}, pero mi apodo es ${apodo}`
    console.log(mensaje)
    //cuando uso un innertext lo edito después de un igual 
    document.getElementById("respuesta").innerText = mensaje
}