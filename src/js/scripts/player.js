import Gameboard from "./gameboard";

export default function Player(n) {
    const name = n;
    let board = Gameboard();
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
        return {
            shot: attack(enemy, x, y),
            x: x,
            y: y
        }
    };
    return { name, board, attack, compAttack };
};
