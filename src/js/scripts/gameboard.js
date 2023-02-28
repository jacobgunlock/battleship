const Ship = require("./ship");

const Gameboard = () => {
    let shipCount = 0;
    let board = [];

    const initBoard = (() => {
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let j = 0; j < 10; j++) {
                board[i][j] = {
                    ship: null,
                    shot: false
                };
            }
        }
    })();

    const placeShip = (length, coord, axis) => {
        if (coord[0] + length > 9 || coord[1] + length > 9) return false;
        if (board[coord[0]][coord[1]].ship !== null) return false;
        let tiles = [];
        for (let i = 0; i < length; i++) {
            if (axis === "vertical") tiles.push([coord[0] + i, coord[1]]);
            else if (axis === "horizontal") tiles.push([coord[0], coord[1] + i]);
        }

        const boat = Ship(length);
        boat.tiles = tiles;
        tiles.forEach((tile) => {
            board[tile[0]][tile[1]].ship = boat;
        });
        shipCount++
        return boat;
    };

    const receiveAttack = (x, y) => {
        board[x][y].shot = true;
        if (board[x][y].ship === null) return 'miss'
        if (board[x][y].ship !== null) {
            const hit = board[x][y].ship.hit();
            if (hit === true) shipCount--;
            return hit;
        }
    };

    const getShipCount = () => {
        return shipCount;
    }

    const isAllSunk = () => {
        if (getShipCount() === 0) return true;
        else return false
    }

    return { board, shipCount, placeShip, receiveAttack, getShipCount, isAllSunk };
};

module.exports = Gameboard;
