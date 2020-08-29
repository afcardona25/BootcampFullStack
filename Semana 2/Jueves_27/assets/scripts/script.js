let errorsign = "*"




function validarFormulario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let correo = document.getElementById("correo").value
    let genero = document.getElementById("genero").value
    let cedula = document.getElementById("cedula").value

    console.log(nombre + " "+ apellido+" "+correo + " "+ genero+" "+cedula+" ")
    if (nombre != "" && apellido != "" && correo != "" && genero != "defaul" && cedula != "" ){
        if (formulario.aceptarTyC.checked == true){
            swal({
                title: "Bienvenido ",
                text: nombre,
                icon: "success",
                button: "Sigue a la Calculadora",
            });
            window.location.href = "../Miercoles_26/Actividad/index.html"
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

