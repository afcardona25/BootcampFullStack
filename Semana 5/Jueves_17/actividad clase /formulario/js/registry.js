const table = document.getElementById('cityRegistry')


const citiesStored = ()=> {
    const cityInStorage = JSON.parse(localStorage.getItem('cities'))
    console.log(cityInStorage)
    for (let i = 0; i <cityInStorage.length; i += 1) {
        table.innerHTML += `
            <tr>
                <th>${i + 1}</th>
                <td>${cityInStorage[i].city}</td>
                <td>${cityInStorage[i].country}</td>
                <td>${cityInStorage[i].attraction}</td>
            <tr>
        `
        // ""
        //  ''
        // ``
        console.log(cityInStorage[i])
    }
}
citiesStored()

