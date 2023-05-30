let wsMyBanner = {
    listTitleBanner(p1) {
        return `<h1 class="display-4 fst-italic">${p1.titleBanner}</h1>
        <p class="lead my-3"> ${p1.descripcion}</p>
        <a type="button" class="btn btn-success" href="https://www.minecraft.net/es-es">OBTENER MINECRAFT</a>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
    /* postMessage({type: "insertImage", src: "./img/fondobanner.jpg"}) */
})