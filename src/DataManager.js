import Stamp from './Stamp';

let stampCollection = [];

function InitDataManager(){
    var stamp1 = new Stamp(
        "Postimerkki",
        1899,
        true,
        'https://www.finnserver.com/vmstamps/images/large/finland-unused/222-1940_LRG.jpg',
        'Finland',
        2.55
    );

    var stamp2 = new Stamp(
        "Postimerkki 2",
        1999,
        true,
        'https://upload.wikimedia.org/wikipedia/commons/7/7f/Urho-Kekkonen-1960.jpg',
        'Finland',
        1.25
    );

    stampCollection.push(stamp1,stamp2);
}

export default stampCollection;
export {InitDataManager};