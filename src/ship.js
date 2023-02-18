const Ship = size => {
    const length = size;
    let destroyed = false;
    let totalHits = 0;
    const hit = () => {
        totalHits++;
        return totalHits;
    }
    const isSunk = () => {
        if (length == totalHits) {
            destroyed = true;
        }
        return destroyed;
    }    
    return {hit, isSunk}
}

module.exports = Ship;