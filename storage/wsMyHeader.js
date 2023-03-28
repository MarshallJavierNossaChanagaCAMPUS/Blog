export let wsMyHeader = {
    listTitle(p1){
        return `<a class="blog-header-logo" href="${p1.href}">${p1.name}</a>`
    },
    listarGames(p1){
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `<a class="p-2" href="${val.href}">${val.name}</a>`    
        });
        return plantilla;
    }
}
//el worker realiza las funciones en segundo plano y manda un mensaje al archivo myHeader JS
self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})