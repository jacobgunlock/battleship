import Ship from './ship';
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
        if (coord[0] > 10 || coord[0] < 0 || coord[1] > 10 || coord[1] < 0) return false;
        if (board[coord[0]][coord[1]].ship !== null) return false;
        if (axis === 'horizontal') if ((coord[1] + length) > 10) return false;
        if (axis === 'vertical') if ((coord[0] + length) > 10) return false;

        let tiles = [];
        for (let i = 0; i < length; i++) {
            if (axis === "vertical") {
                if (board[(coord[0]) + i][coord[1]].ship !== null) return false;
                tiles.push([coord[0] + i, coord[1]]);
            }
            else if (axis === "horizontal") {
                if (board[coord[0]][(coord[1] + i)].ship !== null) return false;
                tiles.push([coord[0], coord[1] + i]);
            }
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

    const randomFleet = () => {
        const ships = [5,4,3,3,2]
        ships.forEach(len => {
            let axis = Math.round(Math.random()) === 1 ? 'horizontal' : 'vertical'
            let boat = false;
            while (boat === false) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                while (board[x][y].ship !== null) {
                    x = Math.floor(Math.random() * 10);
                    y = Math.floor(Math.random() * 10);
                }
                boat = placeShip(len, [x,y], axis);
            };
        });
    };

    return { board, shipCount, placeShip, receiveAttack, getShipCount, isAllSunk, randomFleet };
};
export default Gameboard;
