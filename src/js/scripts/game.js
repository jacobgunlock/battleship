const player = require('./player');

const p1 = player();
const p2 = player();

p1.board.placeShip(3, [3,3], 'horizontal');
p1.board.placeShip(5, [4,4], 'vertical');
p1.board.placeShip(2, [7,7], 'vertical');

p2.board.placeShip(3, [3,3], 'horizontal');
p2.board.placeShip(5, [4,4], 'vertical');
p2.board.placeShip(2, [7,7], 'vertical');

let count = p2.board.getShipCount();

module.exports = { p1, p2 }