let wsMyCards = {
    listarCards(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column bg-secondary position-static">
                    <strong class="d-inline-block mb-2">${val.articulo}</strong>
                    <h3 class="mb-0">${val.titulo}</h3>
                        <div class="mb-1 text-muted">${val.fecha}</div>
                            <p class="mb-auto">${val.descripcion}</p>
                            <a href="${val.href}" class="stretched-link">${val.boton}</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            ${val.imagen}
                        </div>
                </div>
            </div>`
        });
        return plantilla;
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyCards[`${e.data.module}`](e.data.data))
})