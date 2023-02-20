const Ship = size => {
    const length = size;
    let destroyed = false;
    let totalHits = 0;
    const hit = () => {
        totalHits++;
        if (isSunk() == true) return true;
        else return totalHits;
    }
    const isSunk = () => {
        if (length === totalHits) destroyed = true;
        return destroyed;
    }    
    return {hit, isSunk, totalHits}
}
module.exports = Ship;
