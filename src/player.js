const gameboard = require("./gameboard");

const Player = () => {
    let board = gameboard();
    let isTurn = false;

    const attack = (player, x, y) => {
        return player.board.receiveAttack(x, y);
    };

    const compAttack = (player) => {
        return player.board.board
    }

    return { board, attack, compAttack };
};

module.exports = Player;
