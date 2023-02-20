const gameboard = require('../gameboard');

test('creates 10x10 gameboard', () => {
    expect(gameboard().board.length).toBe(10);
    expect(gameboard().board[0].length).toBe(10);
    expect(gameboard().board[9].length).toBe(10);
});

test('fails placing out of bounds', () => {
    expect(gameboard().placeShip(3,[7,7],'horizontal')).toBe(false)
    expect(gameboard().placeShip(3,[7,7],'vertical')).toBe(false)
})

test('place ship correctly on axis', () => {
    const horizontal = gameboard().placeShip(3,[3,3],'horizontal')
    expect(horizontal.tiles).toStrictEqual([[3, 3], [4, 3], [5, 3]])
    
    const vertical = gameboard().placeShip(3,[3,3],'vertical')
    expect(vertical.tiles).toStrictEqual([[3, 3], [3, 4], [3, 5]])
});

test('place ship on board', () => {
    const board = gameboard();
    const ship = board.placeShip(3,[3,3],'vertical');
    expect(board.board[3][3].tiles[0]).toBe(ship.tiles[0])
    expect(board.board[3][4].tiles[1]).toBe(ship.tiles[1])
    expect(board.board[3][5].tiles[2]).toBe(ship.tiles[2])
})

test('receives attack / miss', () => {
    const g = gameboard();
    const ship = g.placeShip(3,[3,3],'vertical');
    expect(g.receiveAttack(2,2)).toBe(true);
});

test('receives attack / hit', () => {
    const g = gameboard();
    const ship = g.placeShip(3,[3,3],'vertical');
    const attack = g.receiveAttack(3,3);
    const attack2 = g.receiveAttack(3,4);
    expect(attack2).toBe(2);
});

test('check ship count', () => {
    const g = gameboard();
    const ship = g.placeShip(1,[3,3],'vertical');
    const ship2 = g.placeShip(3,[4,1],'vertical');
    g.receiveAttack(3,3);
    expect(g.getShipCount()).toBe(1);
});

test('is all sunk', () => {
    const g = gameboard();
    const ship = g.placeShip(1,[3,3],'vertical');
    const ship2 = g.placeShip(1,[5,5],'vertical');
    g.receiveAttack(3,3);
    g.receiveAttack(5,5);
    expect(g.isAllSunk()).toBe(true)
})
