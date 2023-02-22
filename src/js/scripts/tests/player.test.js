const player = require('../player');

test('player attacks', () => {
    const p = player();
    const en = player();
    p.board.placeShip(2,[3, 3],'horizontal');
    en.board.placeShip(4,[3, 3],'horizontal');
    en.attack(p, 3,3);
    en.attack(p, 4,3);
    expect(p.board.board[3][3].ship.getTotalHits()).toBe(2)
    expect(p.board.board[3][3].ship.isSunk()).toBe(true)
})

test('comp attack', () => {
    const p = player();
    const en = player();
    en.compAttack(p);
    expect(en.compAttack(p)).toBe('miss' || '1')
})
