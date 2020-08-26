//tipos de datos primarios 

//undefined y null
var a = undefined
var b = null

//booleanos
var c = true
var d = false

//numbers
var e = 9

//string 
var f = "string"

//symbol 
var g = Symbol('foo')

//objetos 

var primerArray = [1,2,3,4]
var arrayDic = {
    FirstNAme : "Chris",
    LastNAme : "Doe",
    Age : 23
}
console.log(typeof arrayDic)
//Es mejor usar let que var!

//Funciones de practica: Suma resta mult y div 

function suma(x,y){
    let suma = x+y
    return suma
}
function resta(x, y) {
    let resta = x - y
    return resta
}

function multiplicacion(x, y) {
    let multiplicacion = x * y
    return multiplicacion
}
function division(x, y) {
    let division = x / y
    return division
}
console.log(" "+suma(1, 2)+" "+resta(3, 7)+" "+multiplicacion(9, 2)+" "+division(5, 3))

let today = new Date()
let time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
console.log(time)
console.log(today)
