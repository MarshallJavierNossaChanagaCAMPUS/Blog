let wsMyBanner = {
    listTitleBanner(p1) {
        return `<h1 class="display-4 fst-italic">${p1.titleBanner}</h1>
        <p class="lead my-3"> ${p1.descripcion}</p>
        <button type="button" class="btn btn-success">OBTENER MINECRAFT</button>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
    /* postMessage({type: "insertImage", src: "./img/fondobanner.jpg"}) */
})