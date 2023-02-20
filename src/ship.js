const Ship = size => {
    const length = size;
    let destroyed = false;
    let totalHits = 0;
    
    const hit = () => {
        totalHits++;
        isSunk();
        return totalHits
    }
    const isSunk = () => {
        if (length === totalHits) return destroyed = true;
        else return false;
    }    
    return {hit, isSunk, totalHits}
}
module.exports = Ship;