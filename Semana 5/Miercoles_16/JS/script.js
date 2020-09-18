
const darkbtn = document.getElementById("darkThemebtn")
darkbtn.addEventListener('click', () => {
    document.getElementById("container").classList.add("darkThemeOn")
    document.getElementById("container").classList.remove("monoThemeOn")
    
})
let lightbtn = document.getElementById("lightThemeBtn")
lightbtn.addEventListener('click', () => {
    document.getElementById("container").classList.remove("darkThemeOn", "monoThemeOn")
})
let monobtn = document.getElementById("monoThemebtn")
monobtn.addEventListener('click', () => {
    document.getElementById("container").classList.add("monoThemeOn")
    document.getElementById("container").classList.remove("darkThemeOn")
})
 const user = document.getElementById("user")
 user.addEventListener('click', ()=>{
     const logUserName = prompt("Please write your name")
     localStorage.setItem("userNameStorage", logUserName)
     console.log(logUserName, "is the user name")
 })

 const getUserNameStorage = ()=>{
     const storedUserName = localStorage.getItem("userNameStorage")
     document.getElementById("nameInsertion").innerText = storedUserName
     console.log(storedUserName, "is the user name")
 }
 getUserNameStorage()