let errorsign = "*"
function validarFormulario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let correo = document.getElementById("correo").value
    let genero = document.getElementById("genero").value
    let cedula = document.getElementById("cedula").value
    
    console.log(nombre + " "+ apellido+" "+correo + " "+ genero+" "+cedula+" ")
    if (nombre != "" && apellido != "" && correo != "" && genero != "" && cedula != "" ){
        if (formulario.aceptarTyC.checked == true){
            swal({
                title: "Bienvenido ",
                text: nombre,
                icon: "success",
                button: "Sigue a la Calculadora",
            });
        } else {
            document.getElementById("TyC").classList.add("error")
            document.getElementById("TyC").innerText += errorsign
            swal({
                title: "Error!",
                text: "Debes Aceptar términos y condiciones",
                icon: "error",
                button: "Corregir Datos",
            });
        }
        

        return false
    } else {
        while (nombre == ""){
            document.getElementById("nombre").classList.add("error")
            document.getElementById("nombre").innerText += errorsign
        }
        while (apellido == ""){
            document.getElementById("apellido").classList.add("error")
            document.getElementById("apellido").innerText += errorsign
        }
        while (correo == "") {
            document.getElementById("correo").classList.add("error")
            document.getElementById("correo").innerText += errorsign
        }
        while (genero == "") {
            document.getElementById("genero").classList.add("error")
            document.getElementById("genero").innerText += errorsign
        }
        while (cedula == "") {
            document.getElementById("cedula").classList.add("error")
            document.getElementById("cedula").innerText += errorsign
        }
        while (formulario.aceptarTyC.checked == false) {
            document.getElementById("TyC").classList.add("error")
            document.getElementById("TyC").innerText += errorsign
        }
        swal({
            title: "Error!",
            text: "Debes llenar todos los datos",
            icon: "error",
            button: "Corregir Datos",
        });
        return false
    }
    return true
    
    
}