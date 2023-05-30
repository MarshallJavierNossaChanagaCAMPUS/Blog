import config from "../storage/config.js";

export default {
    //Funcion que inserta la imagen del banner
    showImage() {
        //Llamo la data del archivo config
        config.dataMyBanner();
        //Traigo la imagen del local storage
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        //Esta funcion oscurece la imagen
        document.querySelector(".imgStyle").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.banner.image})`;
    },
    workerBanner() {

        config.dataMyBanner();

        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))

        const ws = new Worker("storage/wsMyBanner.js");

        let id = [];

        ws.postMessage({module: "listTitleBanner", data: this.banner});
        id = ["#titleBanner"];

        ws.addEventListener("message", (e) =>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            ws.terminate()
        })
        
    }
}