export default {
    cards: [
        {
            articulo: "Actualizacion",
            titulo: "MINECRAFT TRAILS & TALES",
            fecha: "Mar 02",
            descripcion: "La version 1.20 de minecraft ya tiene nombre oficial",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/minecraft.jpeg" width="250" height="250" alt=""></img>`,
            href: "https://www.muycomputer.com/2023/03/05/minecraft-1-20-ya-tiene-nombre-trails-tales/#:~:text=As%C3%AD%2C%20unos%20meses%20despu%C3%A9s%2C%20con,que%20personalmente%20me%20parece%20muy"
        },
        {
            articulo: "Historia",
            titulo: "Elrich consigue Bedrock en survival",
            fecha: "Ago 02",
            descripcion: "El jugador 'ElrichMC' ha conseguido el item de bedrock en modo supervivencia",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/elrich.jpg" width="250" height="250" alt="">`,
            href: "https://www.youtube.com/watch?v=VkrYzPefX3I"
        },
        {
            articulo: "Promesa",
            titulo: "Don Piola el jugador promesa",
            fecha: "Mar 23",
            descripcion: "Este jugador està logrando cosas increibles...",
            boton: "Sigue leyendo...",
            imagen: `<img src="img/donpiola.png" width="250" height="250" alt="">`,
            href: "https://www.twitch.tv/donpiola"
        }
    ],
/*     listarCards() {
        let plantilla = "";
        this.cards.forEach((val, id) => {
            plantilla += `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column bg-secondary position-static">
                <strong class="d-inline-block mb-2">${val.articulo}</strong>
                <h3 class="mb-0">${val.titulo}</h3>
                <div class="mb-1 text-muted">${val.fecha}</div>
                <p class="mb-auto">${val.descripcion}</p>
                <a href="${val.href}" class="stretched-link">${val.boton}</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                ${val.imagen}
                </div>
            </div>
            </div>`
        });
        document.querySelector("#myCards").insertAdjacentHTML("beforeend", plantilla);
    }, */
    workerCards(){
        const ws = new Worker("storage/wsMyCards.js");

        let id = [];

        ws.postMessage({module: "listarCards", data: this.cards});
        id = ["#myCards"];

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data ,"text/html")

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })


    }
};