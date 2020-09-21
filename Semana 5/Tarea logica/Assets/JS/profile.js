const nameField = document.getElementById("nameOutput")
const emailField = document.getElementById("correoRegistrado")
const passwordField = document.getElementById("contrasenaRegistrada")
const fillData = ()=>{
    const datosGuardados = JSON.parse(localStorage.getItem('datos'))
    console.log(datosGuardados)
    const name = datosGuardados[0].nombre
    console.log(name)
    nameField.innerHTML += `
    ${name}`
    const email = datosGuardados[0].email
    emailField.innerHTML += `
    ${email}`
    const pswd = datosGuardados[0].contrasena
    passwordField.innerHTML += `
    ${pswd}`
}
fillData()


