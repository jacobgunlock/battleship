module.exports = function Ship(length) {
    return {
        length: length,
        destroyed: false,
        totalHits: 0,
        hit() {
            this.totalHits++;
            return this.totalHits;
        },
        isSunk() {
            if (this.length == this.totalHits) {
                this.destroyed = true;
            }
            return this.destroyed;
        }
    }
}