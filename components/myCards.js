export default {
    cards: [
        {
            articulo: "Actualizacion",
            titulo: "MINECRAFT TRAILS & TALES",
            fecha: "Mar 02",
            descripcion: "La version 1.20 de minecraft ya tiene nombre oficial",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/minecraft.jpeg" width="250" height="250" alt=""></img>`
        },
        {
            articulo: "Historia",
            titulo: "Elrich consigue Bedrock en survival",
            fecha: "Ago 02",
            descripcion: "El jugador 'ElrichMC' ha conseguido el item de bedrock en modo supervivencia",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/elrich.jpg" width="250" height="250" alt="">`
        },
        {
            articulo: "Promesa",
            titulo: "Don Piola el jugador promesa",
            fecha: "Mar 23",
            descripcion: "Este jugador està logrando cosas increibles...",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/donpiola.png" width="250" height="250" alt="">`
        }
    ],
    listarCards(){
        let plantilla = "";
        this.cards.forEach((val, id) =>{
            plantilla += `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success">${val.articulo}</strong>
              <h3 class="mb-0">${val.titulo}</h3>
              <div class="mb-1 text-muted">${val.fecha}</div>
              <p class="mb-auto">${val.descripcion}</p>
              <a href="#" class="stretched-link">${val.boton}</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              ${val.imagen}
            </div>
          </div>
        </div>`
        });
        document.querySelector("#myCards").insertAdjacentHTML("beforeend", plantilla);
    }
};