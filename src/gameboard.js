const Ship = require("./ship");

const Gameboard = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
            board[i][j] = false;
        }
    }

    let shipCount = 0;
    const placeShip = (length, coord, axis) => {
        if (coord[0] + length > 9) return false;
        if (coord[1] + length > 9) return false;
        let tiles = [];
        for (let i = 0; i < length; i++) {
            if (axis === "horizontal") tiles.push([coord[0] + i, coord[1]]);
            else if (axis === "vertical") tiles.push([coord[0], coord[1] + i]);
        }
        const boat = Ship(length);
        boat.tiles = tiles;
        tiles.forEach((tile) => {
            board[tile[0]][tile[1]] = boat;
        });
        shipCount++;
        return boat;
    };

    const receiveAttack = (x,y) => {
        if (board[x][y] === false) return board[x][y] = true;
        if (board[x][y] !== false) {
            return board[x][y].hit();
        }
    };

    return { board, placeShip, receiveAttack };
};

module.exports = Gameboard;
