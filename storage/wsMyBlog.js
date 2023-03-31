let wsMyBlog = {
    listSection1(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla +=  ` <h2 class="blog-post-title">${val.title}</h2> <pclass="blog-post-meta">${val.content.date}</p><p>${val.content.paragraph1}</p>`
        });
        return plantilla
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBlog[`${e.data.module}`](e.data.data))
})