const cargarEventos = async() => {
    try {
        const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
        //const respuesta = await fetch('data.json');
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos.events);


        //mostrar cartas
        let contenedor = document.getElementById("contenedor-cartas");    

        mostrarCarta(datos.events, contenedor)

        function mostrarCarta(listCards, contenedor) {
        contenedor.innerHTML = ''
        let fragment = document.createDocumentFragment()
        fragment.className = "contenedor"
        for (let element of listCards) {
            let divi = document.createElement('div')
            divi.classList.add("carta")
            divi.style.padding = "1%"
            divi.innerHTML = 
            `<img src="${element.image}" class="card-img-top"></img> <h5 class="card-title list-group-item">${element.name}</h5> <p class="card-text list-group-item" style="max-content">${element.description}</p> <p class="card-text list-group-item">${element.date}</p> <p class="card-text list-group-item">${element.category}</p> <p class="card-text list-group-item">${element.price} USD</p> <a href="./details.html?id=${element._id}" class="card-link btn btn-secondary">Details</a>`
            fragment.appendChild(divi)
        }
        contenedor.appendChild(fragment)

        } 

        //checkbox
        const categorias = document.getElementById('prueba')

        categorias.appendChild(checkbox(datos.events))

        function checkbox(array) {

        let arrayCategorias = []

        for (let evento of array) {

            let categorias = evento.category
            arrayCategorias.push(categorias)
        }

        let result = arrayCategorias.filter((item, index) => {
            return arrayCategorias.indexOf(item) === index;
        })

        let fragmentCheck = document.createDocumentFragment()

        for (let cat of result) {
            let casillero = document.createElement('p')
            casillero.innerHTML = `<label><input type="checkbox" class="casilla" name="categorias" id=${cat.split(" ").join("_")}> ${cat}
            </label>`
            fragmentCheck.appendChild(casillero)
        }
        return fragmentCheck
        }


        let chequeados = []

        let checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', verificar)
        })

        function verificar() {
        chequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id)
        console.log(chequeados)
        filtroCruzado(datos.events)
        }

        //barra y filtro cruzado

        function filterArray(arrayString, listCards) {
        if (arrayString.length == 0) return listCards
        return listCards.filter(evento => arrayString.includes(evento.category.replace(" ", "_")))
        }
    
        let stringSearch = ""

        const search_input = document.getElementById("barra-buscador")
        console.log(search_input)

        search_input.addEventListener('keyup', () => {
        stringSearch = search_input.value
        filtroCruzado(datos.events)
        })

        function filterString(string, listCards) {
        if (string == "") return listCards
        return listCards.filter(evento => evento.name.toLowerCase().includes(string.toLowerCase().trim()))
        }

        function filtroCruzado(listCards) {
        let arrayFilterCheck = filterArray(chequeados, listCards)
        let arrayFilterString = filterString(stringSearch, arrayFilterCheck)

        mostrarCarta(arrayFilterString, contenedor)
        }



    }catch(error){
        console.log(error)
    }
}

cargarEventos();



$(document).ready(function(){
    alert('Hello! I am Working!')
});






