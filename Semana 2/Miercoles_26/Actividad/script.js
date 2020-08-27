

let resultado = 0
function operaciones(x) {
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    console.log(typeof num1)
    console.log(typeof num2)
    if (num1 != 0 && num2 != 0) {
        switch (x) {
            case suma:
                resultado = num1 + num2
                swal("Suma", "El resultad de la suma es " + resultado, "success", {
                    button: "Sigue calculando",
                })

                document.getElementById("logSumas").innerHTML += num1 + "+" + num2 + "=" + resultado + "<br></br>"
                break
            case resta:
                resultado = num1 - num2
                swal("Resta", "El resultad de la suma es " + resultado, "success", {
                    button: "Sigue calculando",
                })
                document.getElementById("logRestas").innerHTML += num1 + "-" + num2 + "=" + resultado + "<br></br>"
                break
            case multiplicacion:
                resultado = num1 * num2
                swal("Multiplicación", "El resultad de la suma es " + resultado, "success", {
                    button: "Sigue calculando",
                })
                document.getElementById("logMultiplicaciones").innerHTML += num1 + "*" + num2 + "=" + resultado + "<br></br>"
                break
            case division:
                resultado = num1 / num2
                swal("División", "El resultad de la suma es " + resultado, "success", {
                    button: "Sigue calculando",
                })
                document.getElementById("logDivisiones").innerHTML += num1 + "/" + num2 + "=" + resultado + "<br></br>"
                break
        }
        document.getElementById("numero1").value = ""
        document.getElementById("numero2").value = ""
    } else {
        swal("ERROR!", "Por favor ingresa 2 valores para calcular ", "error", {
            button: "Intentarlo Otra vez!",
        })
    }
   
}