let wsMyAside = {
    showAside(par) {
        const data = par.map((val, id) => {
            return (
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
        });
        return data.join("")
    },
    cards(val) {
        return `
        <div class="p-4 mb-3 bg-secondary rounded">
            <h4 class="fst-italic">${val.name}</h4>
            <p class="mb-0">${val.description}</p>
        </div>
        `
    },
    list(p1) {
        return `
        <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
            ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})