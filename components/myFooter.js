export default {
    footer: [
        {
            creditos: "Blog para minecraft hecho por: Don Piola ",
            twitter: "@piola_don",
            link: "https://twitter.com/piola_don"
        }
    ],
    listFooter() {
        let creditos = this.footer[0].creditos;
        let twitter = this.footer[0].twitter;
        let link = this.footer[0].link;

        let plantilla = `
        <p>${creditos}<a href="${link}">${twitter}</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        `
        document.querySelector("#footer").insertAdjacentHTML("beforeend", plantilla)
    }
}
