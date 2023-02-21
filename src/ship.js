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
    const getTotalHits = () => {return totalHits};
    return {hit, isSunk, totalHits, getTotalHits}
}
module.exports = Ship;
