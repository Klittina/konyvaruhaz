class KonyvPublicView {

    #elem;

    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(elem);
        this.#elem = elem;
        //egy sort megkell jeleníteni
        szuloElem.append(`<div>
        <h2>${elem.cim}</h2>
        <h4>Szerző: </h4> <p>${elem.szerzo}</p>
        <h4>Ár: ${elem.ar} FT</h4>
        <h4>Cikkszám: ${elem.id} </h4>
        <td><button id="megvesz${elem.id}">Kosárba</button></td>
        </tr></div>`);
        this.tablaElem = szuloElem.children("table:last-child");
    
        //gombok eseménykezelői

        this.sorElem=szuloElem.children("tr:last-child");
        console.log(this.sorElem);
        this.megveszElem=$(`#mevesz${elem.id}`);

        this.megveszElem.on("click", ()=>{
            console.log("hi");
            this.kattintasTrigger("megveszElem");
        })
    }

    kattintasTrigger(esemenynev){
        console.log("modosit a triggerbe",esemenynev);
        const esemeny=new CustomEvent(esemenynev,{detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }


}

export default KonyvPublicView;