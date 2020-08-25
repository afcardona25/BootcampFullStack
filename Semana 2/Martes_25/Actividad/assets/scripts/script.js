// shakira 
function addDataShakira(){
    var edad = prompt("inserte la edad")
    document.getElementById("EdadShakira").innerText = edad
    var nacionalidad = prompt("inserte nacionalidad")
    document.getElementById("NacionalidadShakira").innerText = nacionalidad
    var patrimonio = prompt("ingrese patrimonio")
    document.getElementById("NetworthShakira").innerText = patrimonio
    var cancion = prompt("ingrese una canción")
    document.getElementById("CancionShakira").innerText = cancion
}
var shakiraPic = document.getElementById("ShakiraPic").addEventListener("click", addDataShakira)

//Dua Lipa 
function addDataDuaLipa() {
    var edad = prompt("inserte la edad")
    document.getElementById("EdadDuaLipa").innerText = edad
    var nacionalidad = prompt("inserte nacionalidad")
    document.getElementById("NacionalidadDuaLipa").innerText = nacionalidad
    var patrimonio = prompt("ingrese patrimonio")
    document.getElementById("NetworthDuaLipa").innerText = patrimonio
    var cancion = prompt("ingrese una canción")
    document.getElementById("CancionDuaLipa").innerText = cancion
}
var DuaLipaPic = document.getElementById("DuaLipaPic").addEventListener("click", addDataDuaLipa)

//Drake
function addDataDrake() {
    var edad = prompt("inserte la edad")
    document.getElementById("EdadDrake").textContent = edad
    var nacionalidad = prompt("inserte nacionalidad")
    document.getElementById("NacionalidadDrake").textContent = nacionalidad
    var patrimonio = prompt("ingrese patrimonio")
    document.getElementById("NetworthDrake").textContent = patrimonio
    var cancion = prompt("ingrese una canción")
    document.getElementById("CancionDrake").textContent = cancion
}
var DrakePic = document.getElementById("DrakePic").addEventListener("click", addDataDrake)
