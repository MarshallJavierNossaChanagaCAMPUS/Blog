export default {
    titleBanner: "Te damos la bienvenida al sitio no oficial de Minecraft",
    descripcion: "Con sus nuevos juegos, nuevas actualizaciones y nuevas formas de jugar, ¡únete a una de las comunidades de juegos más grandes y empieza a crear hoy mismo!",
    image: "../img/fondobanner.jpg",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.image})`
    },
    listTitleBanner(){
        document.querySelector("#titleBanner").insertAdjacentHTML("afterbegin", 
        `<h1 class="display-4 fst-italic">${this.titleBanner}</h1>
        <p class="lead my-3"> ${this.descripcion}</p>
        <button type="button" class="btn btn-success">OBTENER MINECRAFT</button>
        `)
    },
}