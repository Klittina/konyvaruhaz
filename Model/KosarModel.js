class KosarModel {
    #kosarTomb = [];

    constructor() {
        console.log("KosarModel");
    }

    adahelp(adat){
        //console.log(adat,"KosarModel");
        this.#kosarTomb.push(adat);
        console.log(this.#kosarTomb,"watafak");
    }
    

    kosarba(elem){
    }

    getkosarTomb(){

    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#kosarTomb = data.konyv;
                console.log(this.#kosarTomb);
                myCallBack(this.#kosarTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KosarModel;