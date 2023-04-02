import config from "../storage/config.js";

export default {
    
    workerCards(){

        config.dataMyCards();

        Object.assign(this, JSON.parse(localStorage.getItem("myCards")))

        const ws = new Worker("storage/wsMyCards.js");

        let id = [];

        ws.postMessage({module: "listarCards", data: this.cards});
        id = ["#myCards"];

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data ,"text/html")

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })


    }
};