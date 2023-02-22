const gameboard = require("./gameboard");
function Player() {
    let board = gameboard();
    const attack = (enemy, x, y) => {
        return enemy.board.receiveAttack(x, y);
    };
    const compAttack = (enemy) => {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (enemy.board.board[x][y].shot === true) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        return attack(enemy, x, y);
    };
    return { board, attack, compAttack };
};
module.exports = Player;
