$(document).ready(function(){
    alert('Hello! I am Working!')
});


let contenedor = document.getElementById("contenedor-cartas");

let fragment = document.createDocumentFragment();

for(let evento of data.events) {
    if(evento.date > data.currentDate) {
        let divi = document.createElement ('div')
    divi.style.padding = "1%"
    divi.innerHTML = 
    `<img src="${evento.image}" class="card-img-top"></img> <h5 class="card-title list-group-item">${evento.name}</h5> <p class="card-text list-group-item">${evento.description}</p> <p class="card-text list-group-item">${evento.date}</p> <p class="card-text list-group-item">${evento.category}</p> <p class="card-text list-group-item">${evento.price}</p>`
    fragment.appendChild (divi)
    }
}

contenedor.appendChild(fragment)