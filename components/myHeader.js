export default {
    title: {
        name: "Mojang",
        href: "index.html"
    },
    boton: "OBTENER MINECRAFT",
    games: [
    {
        name: "Minecraft",
        href: "#titleBanner"
    },
    {
        name: "Minecraft Story Mode",
        href: "#"
    },
    {
        name: "Minecraft Dungeons",
        href: "#"
    },
    {
        name: "Minecraft Earth",
        href: "#"
    },
    {
        name: "Minecraft Legends",
        href: "#"
    },
    ],
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo" href="${this.title.href}">${this.title.name}</a>`)
    },
    listBoton(){
        document.querySelector("#botonNav")
    },
    listarGames(){
        let plantilla = "";
        this.games.forEach((val, id) => {
            plantilla += `<a class="p-2" href="${val.href}">${val.name}</a>`    
        });
        document.querySelector("#games").insertAdjacentHTML("beforeend", plantilla);
    }
};
