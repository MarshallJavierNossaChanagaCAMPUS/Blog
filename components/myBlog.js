import config from "../storage/config.js";

export default {
    workerBlog() {

        config.dataMyBlog();
        Object.assign(this, JSON.parse(localStorage.getItem("myBlog")))

        const ws = new Worker("storage/wsMyBlog.js")

        let id = [];
        let count = 0

        ws.postMessage({ module: "listSection1", data: this.blog });

          ws.postMessage({module: "listSection2", data: this.part5});
 
         ws.postMessage({module: "listTable", data: this.part5.table})
 
         ws.postMessage({module: "listSection3", data: this.part6})  
        id = ["#articulo1" , "#articulo2", "#arTable", "#articulo3" ]

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.lenght - 1 == count) ? ws.terminate() : count++;
        })
    }
}