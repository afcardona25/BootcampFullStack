const formCiudades = document.getElementById("registroCiudades")

let listaCiudades = []
formCiudades.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputCity = document.getElementById("city").value
    const inputCountry = document.getElementById("country").value
    const inputAttraction = document.getElementById("attraction").value

    const cityInfo = {
        city: inputCity,
        country: inputCountry,
        attraction: inputAttraction
    }

    saveInStorage(cityInfo)
    alert("Ciudad creada")
    document.getElementById("city").value = ""
    document.getElementById("country").value = ""
    document.getElementById("attraction").value = ""

})

const saveInStorage = (cityInfo)=>{
    if (localStorage.getItem('cities') == null) {
        listaCiudades.push(cityInfo)
        const citiesString = JSON.stringify(listaCiudades)
        localStorage.setItem('cities', citiesString)
    } else {
        listInStorage = JSON.parse(localStorage.getItem("cities"))
        listInStorage.push(cityInfo)
        const citiesString = JSON.stringify(listInStorage)
        localStorage.setItem('cities', citiesString)
    }
}