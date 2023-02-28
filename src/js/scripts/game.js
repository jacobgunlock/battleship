const player = require('./player');

const p1 = player('Player');
const p2 = player('Computer');

p1.board.placeShip(2, [3,3], 'vertical');

p2.board.placeShip(2, [7,7], 'vertical');

module.exports = { p1, p2 }