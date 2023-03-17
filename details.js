const cargarEventos = async() => {
  try {
      const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
      //const respuesta = await fetch('data.json');
  console.log(respuesta);

  const datos = await respuesta.json();
  console.log(datos);

  //detalles

  const queryString = location.search

  const params = new URLSearchParams(queryString)

  const id = params.get("id")

  const cartas = datos.events.find(evento => evento._id == id)
  console.log(cartas)

  let contenedor = document.getElementById("card_details");

  function createCard(carta, contenedor) {
  let div = document.createElement('div');
  div.classList.add("detalles")
  div.innerHTML = 
  `
  <table class="table table-bordered" style="width:100%">
  <tr class="titulo-tabla">
    <th class="h2"> Event Name: </th>
    <td class="h2"> ${carta.name}</td>
  </tr>
  <tr>
    <th class="table-light"> Event Description: </th>
    <td class="table-light">${carta.description}</td>
  </tr>
  <tr>
    <th class="table-light">Date: </th>
    <td class="table-light">${carta.date}</td>
  </tr>
  <tr>
    <th class="table-light">Event Category: </th>
    <td class="table-light">${carta.category}</td>
  </tr>
  <tr>
    <th class="table-light">It takes place in: </th>
    <td class="table-light">${carta.place}</td>
  </tr>
  <tr>
    <th class="table-light">How much would it cost? </th>
    <td class="table-light">${carta.price} USD</td>
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

  }catch(error){
      console.log(error)
  }
}

cargarEventos();



$(document).ready(function(){
  alert('Hello! I am Working!')
});


