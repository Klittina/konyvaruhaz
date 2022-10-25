import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`<div class="foDiv"><header>Könyv Áruház</header></div>`);
        this.divElem = szuloElem.children("div:last-child");

        tomb.forEach(konyv => {
            const konyvem = new KonyvPublicView(konyv,this.divElem);
        });
    }
}

export default KonyvekPublicView;