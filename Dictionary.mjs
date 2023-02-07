import language from "./lan/no.json" assert {type: 'json'};


class Dictionary{

    constructor(...languages){
        this.languages = languages
        this.dictionary = null;
        //sier hvilke språk som er tilgjengelige
    }

    setLanguage = function(){
        //VElger og laster språket som skal brukes
    }

    get = function(key){
        // henter riktig verdi basert på key i Dictionary
    }

    keys= function(){
        //returnerer alle keys
        return Object.keys(this.dictionary);
    }
}

DICTIONARY_KEYS = {
    no: "no"
}

let dictionary = new Dictionary(/lan/no.json);
dictionary.setLanguage("no");
dictionary.get("end")