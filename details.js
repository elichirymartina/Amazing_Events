$(document).ready(function(){
  alert('Hello! I am Working!')
});

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const cartas = data.events.find(evento => evento._id == id)
console.log(cartas)



let contenedor = document.getElementById("card_details");




function createCard(carta, contenedor) {
  let div = document.createElement('div');
  div.classList.add("detalles")
  div.innerHTML = 

  `
  
  <table "table table-bordered" width=60% height=70% >
  <tr class="titulo-tabla">
    <th colspan="3" class="h2"> Event Name: </th>
    <td colspan="3" class="h2"> ${carta.name}</td>
  </tr>
  <tr>
    <th class="table-light"> Event Description: </th>
    <td colspan="3" class="table-light">${carta.description}</td>
  </tr>
  <tr>
    <th class="table-light">Date: </th>
    <td colspan="3" class="table-light">${carta.date}</td>
  </tr>
  <tr>
    <th class="table-light">Event Category: </th>
    <td colspan="3" class="table-light">${carta.category}</td>
  </tr>
  <tr>
    <th class="table-light">It takes place in: </th>
    <td colspan="3" class="table-light">${carta.place}</td>
  </tr>
  <tr>
    <th class="table-light">How much would it cost? </th>
    <td colspan="3" class="table-light">${carta.price} USD</td>
  </tr>
  </table>
  
  <img src="${carta.image}" alt="Card image cap" class="imagenes-detalles">

  <p class="boton">
      <a class="btn btn-secondary" href="index.html" role="button">Return</a>
    </p>
  `
    contenedor.appendChild(div)
}

createCard(cartas, contenedor)

