export default {
    nav: [
        {
            name: "About",
            description: "Minecraft es un videojuego de construcción de tipo mundo abierto o sandbox creado originalmente por Notch, y posteriormente desarrollado por Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable 1.0 fue publicada el 18 de noviembre de 2011. "
        },
        {
            title: "Versions trailers",
            link:[
                {
                    name: "1.0",
                    href: ""
                },
                {
                    name: "1.2",
                    href: ""
                },
                {
                    name: "1.3",
                    href: ""
                },
                {
                    name: "1.5",
                    href: ""
                },
                {
                    name: "1.6",
                    href: ""
                },
                {
                    name: "1.7",
                    href: ""
                },
                {
                    name: "1.8",
                    href: ""
                },
                {
                    name: "1.9",
                    href: ""
                },
                {
                    name: "1.10",
                    href: ""
                },
                {
                    name: "1.11",
                    href: ""
                },
                {
                    name: "1.12",
                    href: ""
                },
                {
                    name: "1.13",
                    href: ""
                },
                {
                    name: "1.14",
                    href: ""
                },
                {
                    name: "1.15",
                    href: ""
                },
                {
                    name: "1.16",
                    href: ""
                },
                {
                    name: "1.17",
                    href: ""
                },
                {
                    name: "1.18",
                    href: ""
                },
                {
                    name: "1.19",
                    href: ""
                },
                {
                    name: "1.20",
                    href: ""
                }
            ]
        },
        {
            title: "Social medias",
            link:[
                {
                    name: "Twitch",
                    href: "",
                },
                {
                    name: "YouTube",
                    href: "",
                },
                {
                    name: "Twitter",
                    href: "",
                },
                {
                    name: "Github",
                    href: "",
                },
                {
                    name: "Instagram",
                    href: "",
                }
            ]
        }
    ],
    showAside(){
        const data = this.nav.map((val, id) =>{
            return(
                (val.link)
                ?this.list(val)
                :this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))
    },
    cards(p1){
        return `
        <div class="p-4 mb-3 bg-secondary rounded">
            <h4 class="fst-italic">${p1.name}</h4>
            <p class="mb-0">${p1.description}</p>
        </div>
        `
    },
    list(p1){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled mb-0">
          ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>` ).join("")}
        </ol>
      </div>
        `
    }
}