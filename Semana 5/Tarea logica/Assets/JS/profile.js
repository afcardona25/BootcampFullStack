const nameField = document.getElementById("nameOutput")
const emailField = document.getElementById("correoRegistrado")
const passwordField = document.getElementById("contrasenaRegistrada")

const fillData = ()=>{
    
    const datosGuardados = JSON.parse(localStorage.getItem('datos'))
    console.log(datosGuardados)
    if(datosGuardados.length==1){
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

    } else{
        let lastItem = datosGuardados[datosGuardados.length-1]
        const name = lastItem.nombre
        console.log(name)
        nameField.innerHTML += `
    ${name}`
        const email = lastItem.email
        emailField.innerHTML += `
    ${email}`
        const pswd = lastItem.contrasena
        passwordField.innerHTML += `
    ${pswd}`
    }
   
}
fillData()


