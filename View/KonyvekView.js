import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><tr>
        <td>ID</td>
        <td>Cím</td>
        <td>Szerző</td>
        <td>Ár</td>
        </tr></table>`);
        this.tabla = szuloElem.children("table:last-child");

        tomb.forEach(konyv => {
            const konyv = new KonyvView();
        });
    }
}

export default KonyvekView;