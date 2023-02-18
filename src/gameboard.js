const Ship = require("./ship");

const Gameboard = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            board[i][j] = j;
        }
    }
    const placeShip = (length, coord, axis) => {
        const newship = Ship(length);
        if (coord[0] + length > 9) return false;
        if (coord[1] + length > 9) return false;
        let tiles = [];
        for (let i = 0; i < length; i++) {
            if (axis === "horizontal") {
                tiles.push([coord[0] + i, coord[1]]);
            }
            else if (axis === "vertical") {
                tiles.push([coord[0], coord[1] + i]);
            }
        }
        newship.tiles = tiles;

        return newship;
    };
    return { board, placeShip };
};

module.exports = Gameboard;
