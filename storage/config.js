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

    dataMyBlog(){
        localStorage.setItem("myBlog", JSON.stringify({
            blog: [
                {
                    title: 'Minecraft',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Al inicio del juego, el jugador se encuentra en un mundo generado mediante un algoritmo, lo que permite que este sea teóricamente infinito y nunca se generen dos mundos iguales. El jugador es libre de desplazarse por el terreno, conformado por distintos biomas, entre los que se encuentran desiertos, sabanas, selvas, océanos, llanuras, tundras, etcétera. El juego posee su propio ciclo de tiempo de día y noche, siendo que un día en el juego equivale a 20 minutos en la realidad. El mundo no se genera por completo al principio, sino que está dividido en chunks («trozos», «pedazos» traducido literalmente al español, pero sin adaptación oficial) de 16  16 bloques en horizontal. Los chunks cercanos al jugador se cargan en la memoria. A medida que este se desplaza, se generan y añaden nuevos chunks al mundo.',
        
                    }
                },
                {
                    title: 'Survival mode',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'El modo supervivencia se basa en la vida real combinada con un poco de fantasía y se trata de la supervivencia al ataque de las múltiples criaturas que surgen en la oscuridad o de noche. El máximo aguante que tienen los personajes consta de 10 corazones (20 puntos de salud). En este modo las herramientas, armas y armadura se gastan con el uso.',
        
                    }
                },
                {
                    title: 'Creative mode',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'En el modo creativo se centra enteramente en el aspecto de la construcción libre. Los jugadores poseen un suministro ilimitado de todos los bloques y objetos del juego, que pueden colocar y destruir de forma instantánea. Además, no son atacados por los monstruos, son inmunes a todo daño (aunque sí pueden morir cayendo al vacío si están en Java Edition) y pueden volar libremente por el mapa. En este modo no se pueden romper bloques sosteniendo espada, para prevenir la destrucción del entorno cuando el jugador golpea o ataca.',
        
                    }
                },
                {
                    title: 'Hardcore mode',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'El modo extremo es idéntico al modo supervivencia, con la diferencia de que tras la muerte del jugador este ya no puede volver a revivir y la dificultad está fijada en difícil.'
                    }
                },
            ],
            part5: {
                title: 'Online mode',
                content: {
                    date: '23/03/2023',
                    paragraph1: 'El modo multijugador en Minecraft permite que varios jugadores interactúen y se comuniquen entre sí en un solo mundo. Está disponible a través de multijugador directo de juego a juego, juego LAN, pantalla dividida local (solo consola) y servidores (alojados por jugadores y negocios). Los jugadores pueden ejecutar sus propios servidores, usar un proveedor de alojamiento o conectarse directamente al juego de otro jugador a través de Xbox Live. Los mundos de un solo jugador tienen soporte de red de área local, lo que permite a los jugadores unirse a un mundo en computadoras interconectadas localmente sin una configuración de servidor. Los servidores multijugador de Minecraft están guiados por operadores de servidores, que tienen acceso a los comandos del servidor, como configurar la hora del día y teletransportar a los jugadores. Los operadores también pueden establecer restricciones con respecto a qué nombres de usuario o direcciones IP pueden o no ingresar al servidor. Los servidores multijugador tienen una amplia gama de actividades, y algunos servidores tienen sus propias reglas y costumbres únicas. El servidor más grande y popular es Hypixel, que ha sido visitado por más de 14 millones de jugadores únicos. El combate jugador contra jugador (PvP) se puede habilitar para permitir la lucha entre jugadores. Muchos servidores tienen complementos personalizados que permiten acciones que normalmente no son posibles.',
                },
                table: [
                    {
                        server: "Hypixel",
                        players: "29715 jugadores en este momento",
                        ip: "mc.hypixel.net",
                    },
                    {
                        server: "Librecraft",
                        players: "6969 jugadores en este momento",
                        ip: "mc.librecraft.com",
                    },
                    {
                        server: "Complex Gaming",
                        players: "2891 jugadores en este momento",
                        ip: "hub.mc-complex.com",
                    }
                ]
            },
            part6: {
                title: 'Mencion honorifica a otros juegos de Mojang',
                date: '23/03/2023',
                paragraph1: {
                    game1: "Minecratf Story Mode",
                    game2: "Minecraft Dungeons",
                    game3: "Minecraft Earth (RIP)",
                    game4: "Minecraft Legends"
                }
            },
        }))
    },

    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            footer: {
                creditos: "Blog para minecraft hecho por: Don Piola ",
                twitter: "@piola_don",
                link: "https://twitter.com/piola_don"
            },
        }))
    }
}

//importamos todos los objetos desde aqui hacia el local storage

//usaremos los objetos desde el local storage para meterlos en el worker y luego a las funciones asignadas

//importamos esto a cada uno