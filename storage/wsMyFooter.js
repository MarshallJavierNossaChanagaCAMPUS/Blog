let wsMyFooter = {
    listFooter(p1) {
        return `
        <p>${p1.creditos}<a href="${p1.link}">${p1.twitter}</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        `
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})