//Validate Data from form 
const userData = document.getElementById("indexForm")

let userDataInput = []
var retu = false

userData.addEventListener("submit", ()=> {
    
    const nombre = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    const userInfo = {
        nombre: nombre,
        email: email,
        contrasena: password
    }

    saveInStorage(userInfo)
    alert(`Bienvenido(a) ${userInfo.nombre}`)
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = "" 
    window.location.replace("/Users/andrescardona/Documents/GitHub/BootcampFullStack/Semana 5/Tarea logica/Assets/Pages/perfil.html")
})

const saveInStorage = (userInfo) => {
    if (localStorage.getItem('datos') == null) {
        userDataInput.push(userInfo)
        const dataString = JSON.stringify(userDataInput)
        localStorage.setItem('datos', dataString)

    } else {
        listInStorage = JSON.parse(localStorage.getItem("datos"))
        listInStorage.push(userInfo)
        const dataString = JSON.stringify(listInStorage)
        localStorage.setItem('datos', dataString)
       
    }
}
/*function checkName(x){
    if(x ==""){
        document.getElementById("name").classList.add("is-invalid")
        alert("Ingrese su nombre completo")

        retu = false
    } else {
        retu = true
    }
}
function checkEmail(x){
    if (retu === false){
        retu = false
    } else {
        if (x == "") {
            document.getElementById("email").classList.add("is-invalid")
            alert("Ingrese un correo")

            retu = false
        } else if (x.includes("@")) {
            retu = true
        } else {
            alert("Ingresa un correo válido")
            retu = false
        }
    }
   
}
function checkPassword(x){
    if(retu === false){
        retu = false
    } else{
        if(x.lenght < 6){
            alert("La contraseña debe contener al menos 6 caracteres")
            retu = false
        } else{
            retu = true
        }
    }
}*/