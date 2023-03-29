let wsMyFooter = {
    listFooter(p1) {
        let creditos = p1.footer[0].creditos;
        let twitter = p1.footer[0].twitter;
        let link = p1.footer[0].link;

        let plantilla = `
        <p>${creditos}<a href="${link}">${twitter}</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        `
        return plantilla
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})