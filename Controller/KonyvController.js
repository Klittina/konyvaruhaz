import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js"

class KonyvController {
    constructor() {
        console.log("KonyvController");
        //new KonyvekView();
        const konyvmodel = new KonyvModel();

        $("#admin").on("click", ()=>{
            konyvmodel.adatBe("../adat.json",this.konyvAdatok)
        })
        $("#pub").on("click", ()=>{
            konyvmodel.adatBe("../adat.json",this.konyvPublicAdatok)
        })



        $(window).on("modosit",()=>{
            console.log("controllerben modosit", event.detail);
            konyvmodel.adaModosit(event.detail);
        })
    }

    konyvAdatok(tomb) {
        const szuloelem=$("main");
        new KonyvekView(tomb,szuloelem);
        console.log(tomb);
    }
    konyvPublicAdatok(tomb) {
        const szuloelem=$("main");
        new KonyvekPublicView(tomb,szuloelem);
        console.log(tomb);
    }
}

export default KonyvController;