
let resultado = 0
function operaciones(x) {
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    console.log(typeof num1)
    console.log(typeof num2)
    switch(x){
        case suma: 
            resultado = num1 + num2
            alert("El resultad de la suma es:  "+resultado )
            document.getElementById("logSumas").innerHTML += num1 +  "+"+ num2 +"="+resultado+ "<br></br>"
            break
        case resta: 
            resultado = num1 - num2
            alert("El resultado de la resta es:  " + resultado)
            document.getElementById("logRestas").innerHTML += num1 + "-" + num2 + "=" + resultado + "<br></br>"
            break
        case multiplicacion:
            resultado = num1 * num2
            alert("El resultado de la multiplicación es:  " + resultado)
            document.getElementById("logMultiplicaciones").innerHTML += num1 + "*" + num2 + "=" + resultado + "<br></br>"
            break
        case division:
            resultado = num1 / num2
            alert("El resultado de la división es:  " + resultado)
            document.getElementById("logDivisiones").innerHTML += num1 + "/" + num2 + "=" + resultado + "<br></br>"
            break
    }
}