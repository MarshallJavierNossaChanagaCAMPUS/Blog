export default {
    blog: [
        {
            part: {
                    title: 'Minecraft',
                    content: [
                        {
                            date: '23/03/2023',
                            paragraph1: 'Al inicio del juego, el jugador se encuentra en un mundo generado mediante un algoritmo, lo que permite que este sea teóricamente infinito y nunca se generen dos mundos iguales. El jugador es libre de desplazarse por el terreno, conformado por distintos biomas, entre los que se encuentran desiertos, sabanas, selvas, océanos, llanuras, tundras, etcétera. El juego posee su propio ciclo de tiempo de día y noche, siendo que un día en el juego equivale a 20 minutos en la realidad. El mundo no se genera por completo al principio, sino que está dividido en chunks («trozos», «pedazos» traducido literalmente al español, pero sin adaptación oficial) de 16  16 bloques en horizontal. Los chunks cercanos al jugador se cargan en la memoria. A medida que este se desplaza, se generan y añaden nuevos chunks al mundo.',
                        }
                    ]
                }
        },
        {
            part: {
                    title: 'Survival mode',
                    content: [
                        {
                            date: '23/03/2023',
                            paragraph1: 'El modo supervivencia se basa en la vida real combinada con un poco de fantasía y se trata de la supervivencia al ataque de las múltiples criaturas que surgen en la oscuridad o de noche. El máximo aguante que tienen los personajes consta de 10 corazones (20 puntos de salud). En este modo las herramientas, armas y armadura se gastan con el uso.',
                        }
                    ]
                }
        },
        {
            part: {
                    title: 'Creative mode',
                    content: [
                        {
                            date: '23/03/2023',
                            paragraph1: 'En el modo creativo se centra enteramente en el aspecto de la construcción libre. Los jugadores poseen un suministro ilimitado de todos los bloques y objetos del juego, que pueden colocar y destruir de forma instantánea. Además, no son atacados por los monstruos, son inmunes a todo daño (aunque sí pueden morir cayendo al vacío si están en Java Edition) y pueden volar libremente por el mapa. En este modo no se pueden romper bloques sosteniendo espada, para prevenir la destrucción del entorno cuando el jugador golpea o ataca.',
                        }
                    ]
                }
        },
        {
            part: {
                    title: 'Hardcore mode',
                    content: [
                        {
                            date: '23/03/2023',
                            paragraph1: 'El modo extremo es idéntico al modo supervivencia, con la diferencia de que tras la muerte del jugador este ya no puede volver a revivir y la dificultad está fijada en difícil.'
                        }
                    ],
                }
        },
    ],
    part5: {
            title: 'Online mode',
            content: [
                {
                    date: '23/03/2023',
                    paragraph1: 'El modo multijugador en Minecraft permite que varios jugadores interactúen y se comuniquen entre sí en un solo mundo. Está disponible a través de multijugador directo de juego a juego, juego LAN, pantalla dividida local (solo consola) y servidores (alojados por jugadores y negocios). Los jugadores pueden ejecutar sus propios servidores, usar un proveedor de alojamiento o conectarse directamente al juego de otro jugador a través de Xbox Live. Los mundos de un solo jugador tienen soporte de red de área local, lo que permite a los jugadores unirse a un mundo en computadoras interconectadas localmente sin una configuración de servidor. Los servidores multijugador de Minecraft están guiados por operadores de servidores, que tienen acceso a los comandos del servidor, como configurar la hora del día y teletransportar a los jugadores. Los operadores también pueden establecer restricciones con respecto a qué nombres de usuario o direcciones IP pueden o no ingresar al servidor. Los servidores multijugador tienen una amplia gama de actividades, y algunos servidores tienen sus propias reglas y costumbres únicas. El servidor más grande y popular es Hypixel, que ha sido visitado por más de 14 millones de jugadores únicos. El combate jugador contra jugador (PvP) se puede habilitar para permitir la lucha entre jugadores. Muchos servidores tienen complementos personalizados que permiten acciones que normalmente no son posibles.',
                }
            ],
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
            paragraph1: [
                {
                    game1: "Minecratf Story Mode",
                    game2: "Minecraft Dungeons",
                    game3: "Minecraft Earth (RIP)",
                    game4: "Minecraft Legends"
                }
            ]
        },
    listSection1() {
        let plantilla = "";
        this.blog.forEach((val, id) => {
            plantilla = `${val.part.map((val, id) => `<h2 class="blog-post-title">${val.title}</h2> ${val.content.map((val, id) => `<pclass="blog-post-meta">${val.date}</p><p>${val.paragraph1}</p>`)}`)}`

            document.querySelector("#articulo1").insertAdjacentHTML("beforeend", plantilla)
        })
    },
    listSection2() {
        document.querySelector("#articulo2").insertAdjacentHTML("afterbegin", `${this.part5.map((val, id) => `<h2 class="blog-post-title">${val.title}</h2> ${val.content.map((val, id) => `<pclass="blog-post-meta">${val.date}</p><p>${val.paragraph1}</p>`)}`)}`)

    },
    listTable() {
        let planTable = "";
        this.part5.map((val, id) => {
            `${val.table.forEach((val, id) => {
                planTable += `<tr>
                    <td>${val.server}</td>
                    <td>${val.players}</td>
                    <td>${val.ip}</td>
                </tr> <br>`
            })}`
        });
        document.querySelector("#arTable").insertAdjacentHTML("beforeend", `
        <tr>
            <th>Server</th>
            <th>Jugadores</th>
            <th>Ip</th>
        </tr> <br>
      `)
        document.querySelector("#arTable").insertAdjacentHTML("beforeend", planTable)
    },
    listSection3() {

        let title = this.part6[0].title;
        let date = this.part6[0].date;
        let games = this.part6.map((val, id) => {
            return `
        ${val.paragraph1.map((val, id) => {
                return `
            <p>${val.game1}</p>
            <p>${val.game2}</p>
            <p>${val.game3}</p>
            <p>${val.game4}</p>
            `
            })}
        `});

        let plantilla = `
        <h2 class="blog-post-title">${title}</h2>
        <pclass="blog-post-meta">${date}</p>
        ${games}
        `
        document.querySelector("#articulo3").insertAdjacentHTML("afterbegin", plantilla)
    }
}