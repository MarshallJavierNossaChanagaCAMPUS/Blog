import config from "../storage/config.js";

export default {
    /* footer: {
            creditos: "Blog para minecraft hecho por: Don Piola ",
            twitter: "@piola_don",
            link: "https://twitter.com/piola_don"
        }, */

    workerFooter(){

        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")))

        const ws = new Worker("storage/wsMyFooter.js")

        let id = [];

        ws.postMessage({module: "listFooter", data: this.footer});
        id = ["footer"];

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })

        
    }
}
