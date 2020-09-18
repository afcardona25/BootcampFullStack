const artista1 = {
    nombre: "Dua Lipa",
    edad: 25,
    ultimoSencillo: "One Day"
} 

const artista1String = JSON.stringify(artista1)
localStorage.setItem("artista1", artista1String)

const artista1EnStorage = JSON.parse(localStorage.getItem("artista1"))
console.log(artista1EnStorage)

document.getElementById("nombreArtista").innerText = artista1EnStorage["nombre"]

document.getElementById("edadArtista").innerText = artista1EnStorage["edad"]

document.getElementById("ultimoSencillo").innerText = artista1EnStorage["ultimoSencillo"]

const artista2 = {
    nombre: "Shakira",
    edad: 43,
    ultimoSencillo: "Me gusta"
}


const artista2String = JSON.stringify(artista2)
localStorage.setItem("artista2", artista2String)

const artista2EnStorage = JSON.parse(localStorage.getItem("artista2"))
console.log(artista2EnStorage)

document.getElementById("nombreArtista2").innerText = artista2EnStorage["nombre"]

document.getElementById("edadArtista2").innerText = artista2EnStorage["edad"]

document.getElementById("ultimoSencillo2").innerText = artista2EnStorage["ultimoSencillo"]

const artista3 = {
    nombre: "Drake",
    edad: 33,
    ultimoSencillo: "Laugh Now Cry Later"
}


const artista3String = JSON.stringify(artista3)
localStorage.setItem("artista3", artista3String)

const artista3EnStorage = JSON.parse(localStorage.getItem("artista3"))
console.log(artista3EnStorage)

document.getElementById("nombreArtista3").innerText = artista3EnStorage["nombre"]

document.getElementById("edadArtista3").innerText = artista3EnStorage["edad"]

document.getElementById("ultimoSencillo3").innerText = artista3EnStorage["ultimoSencillo"]