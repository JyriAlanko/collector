import Stamp from './Stamp';


class DataManager {
    constructor() {
        this.stampCollection = [];
    }
    

    InitDataManager(){
        this.stampCollection.push(new Stamp(
            "Postimerkki",
            1899,
            true,
            'https://www.finnserver.com/vmstamps/images/large/finland-unused/222-1940_LRG.jpg',
            'Finland',
            2.55
        ));

        this.stampCollection.push(new Stamp(
            "Postimerkki 2",
            1999,
            true,
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Urho-Kekkonen-1960.jpg',
            'Finland',
            1.25
        ));

        
    }
}
export default DataManager;