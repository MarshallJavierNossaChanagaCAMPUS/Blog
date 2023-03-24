export default{
    part1: [
        {
            titulo : "Estimula tu creatividad",
            contenido: [
                fecha = "23/03/2023",
                parrafo1 = "Al inicio del juego, el jugador se encuentra en un mundo generado mediante un algoritmo, lo que permite que este sea teóricamente infinito y nunca se generen dos mundos iguales. El jugador es libre de desplazarse por el terreno, conformado por distintos biomas, entre los que se encuentran desiertos, sabanas, selvas, océanos, llanuras, tundras, etcétera. El juego posee su propio ciclo de tiempo de día y noche, siendo que un día en el juego equivale a 20 minutos en la realidad.",
                parrafo2 = "El mundo no se genera por completo al principio, sino que está dividido en chunks («trozos», «pedazos» traducido literalmente al español, pero sin adaptación oficial) de 16  16 bloques en horizontal. Los chunks cercanos al jugador se cargan en la memoria. A medida que este se desplaza, se generan y añaden nuevos chunks al mundo."
            ]
        }
    ],
    listarPart1(){
        document.querySelector("#part1").insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${this.part1.titulo}</h2>
        <p class="blog-post-meta">${this.part1.contenido.fecha}</p><p>${this.part1.contenido.parrafo1}</p><p>${this.part1.contenido.parrafo2}</p>
        `)
        console.log(this.listarPart1);
    }
}