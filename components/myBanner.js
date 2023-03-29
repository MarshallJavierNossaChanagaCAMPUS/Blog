export default {
    banner:
        {
            titleBanner: "Te damos la bienvenida al sitio no oficial de Minecraft",
            descripcion: "Con sus nuevos juegos, nuevas actualizaciones y nuevas formas de jugar, ¡únete a una de las comunidades de juegos más grandes y empieza a crear hoy mismo!",
            image: "../img/fondobanner.jpg",
        },
    showImage() {
        document.querySelector(".imgStyle").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.banner.image})`
    },
    workerBanner() {

        const ws = new Worker("storage/wsMyBanner.js");

        let id = [];

        ws.postMessage({module: "listTitleBanner", data: this.banner});
        id = ["#titleBanner"];

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            /* if (e.data.type == "insertImage") {
                const img = document.createElement("img")
                img.src = e.data.src;
                const targetElement = document.querySelector(id);
                targetElement.appendChild(img);
            } */
        
            ws.terminate()
        })
        
    }
}