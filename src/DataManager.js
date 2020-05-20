import Stamp from './Stamp';

let stampCollection = [];

function InitDataManager(){
    var stamp1 = new Stamp(
        "Postimerkki",
        1899,
        true,
        'https://www.finnserver.com/vmstamps/images/large/finland-unused/222-1940_LRG.jpg',
        'Finland'
    );

    var stamp2 = new Stamp(
        "Stamp 2",
        1999,
        true
    );

    stampCollection.push(stamp1,stamp2);
}

export default stampCollection;
export {InitDataManager};