const API = "https://rickandmortyapi.com/api/character"

//obtener resultado API
const getData =(api)=>{
    return fetch(api)
        .then((Response)=> Response.json())
        .then((json)=>{
            llenarDatos(json), paginacion(json.info)
        })
        .catch((error)=>{
            console.log("Error :", error)
        })
}
const llenarDatos = (data)=>{
    let html = ""
    data.results.forEach((pj) => {
        html += '<div class="col">'
        html += '<div class="card" style="width: 10rem;">'
        html += `<img src="${pj.image}" class="card-img-top img-card-poke" alt="...">`
        html += '<div class="card-body">'
        html += `<h5 class="card-title"><b>Name: </b>${pj.name}</h5>`
        
        html += '</div>'
        html += '</div>'
        html += '</div>'
    });
    document.getElementById("datosPersonajes").innerHTML = html
}
//paginacion
const paginacion =(info)=>{

    let prevDisabled = (info.prev == null) ? "disabled" : ""
    let nextDisabled = (info.next == null) ? "disabled" : ""
    
    let html = ""

    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById("paginacion").innerHTML= html
}
//ejecutar getData
getData(API)
