export default {
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                name: "Mojang",
                href: "index.html"
            },
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
            ]
        }))
    }
}

//importamos todos los objetos desde aqui hacia el local storage

//usaremos los objetos desde el local storage para meterlos en el worker y luego a las funciones asignadas

//importamos esto a cada uno