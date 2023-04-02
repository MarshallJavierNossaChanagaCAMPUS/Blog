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
    },

    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            banner:
                {
                titleBanner: "Te damos la bienvenida al sitio no oficial de Minecraft",
                descripcion: "Con sus nuevos juegos, nuevas actualizaciones y nuevas formas de jugar, ¡únete a una de las comunidades de juegos más grandes y empieza a crear hoy mismo!",
                image: "../img/fondobanner.jpg",
            },
        }))
    },

    dataMyCards(){
        localStorage.setItem("myCards", JSON.stringify({
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
                ]
        }))
    },

    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
            nav: [
                {
                    name: "About",
                    description: "Minecraft es un videojuego de construcción de tipo mundo abierto o sandbox creado originalmente por Notch, y posteriormente desarrollado por Mojang Studios (actualmente parte de Microsoft). Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable 1.0 fue publicada el 18 de noviembre de 2011. "
                },
                {
                    title: "Versions trailers",
                    link: [
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
                    link: [
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
        }))
    },
}

//importamos todos los objetos desde aqui hacia el local storage

//usaremos los objetos desde el local storage para meterlos en el worker y luego a las funciones asignadas

//importamos esto a cada uno