const artista = {
    nombre: "Dua Lipa",
    edad: 25,
    ultimoSencillo: "One Day"
} 

const artistaString = JSON.stringify(artista)
localStorage.setItem("artista", artistaString)

const artistaEnStorage = JSON.parse(localStorage.getItem("artista"))
console.log(artistaEnStorage)

document.getElementById("nombreArtista").innerText = artistaEnStorage["nombre"]

document.getElementById("edadArtista").innerText = artistaEnStorage["edad"]

document.getElementById("ultimoSencillo").innerText = artistaEnStorage["ultimoSencillo"]