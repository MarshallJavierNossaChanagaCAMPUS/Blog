export default {
    cards: {
            titulo1: "Actualizacion",
            titulo: "MINECRAFT TRAILS & TALES",
            fecha: "Mar 02",
            descripcion: "La version 1.20 de minecraft ya tiene nombre oficial",
            boton: "Sigue leyendo...",
            
            titulo2: "Historia",
            titulo3: "Elrich consigue Bedrock en survival",
            fecha2: "Ago 02",
            descripcion2: "El jugador de minecraft tecnico 'ElrichMC' ha conseguido el item de bedrock en modo supervivencia",
            boton2: "Sigue leyendo..."
        },
    listCard1(){
            document.querySelector("#card1").insertAdjacentHTML("beforeend", `<strong class="d-inline-block mb-2 text-primary">${this.cards.titulo1}</strong><h3 class="mb-0">${this.cards.titulo}</h3> <div class="mb-1 text-muted">${this.cards.fecha}</div> <p class="card-text mb-auto">${this.cards.descripcion}</p> <a href="#" class="stretched-link">${this.cards.boton}</a>`)
    },
    listCard2(){
        document.querySelector("#card2").insertAdjacentHTML("beforeend", `<strong class="d-inline-block mb-2 text-primary">${this.cards.titulo2}</strong><h3 class="mb-0">${this.cards.titulo3}</h3> <div class="mb-1 text-muted">${this.cards.fecha2}</div> <p class="card-text mb-auto">${this.cards.descripcion2}</p> <a href="#" class="stretched-link">${this.cards.boton2}</a>`)
    }
}