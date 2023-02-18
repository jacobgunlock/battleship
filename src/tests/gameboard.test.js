const gameboard = require('../gameboard');

test('creates 10x10 gameboard', () => {
    expect(gameboard().board.length).toBe(10);
    expect(gameboard().board[0].length).toBe(10);
    expect(gameboard().board[9].length).toBe(10);
});

test('fails placing out of bounds', () => {
    expect(gameboard().placeShip(3,[7,7],'horizontal')).toBe(false)
})

test('place ship correctly on axis', () => {
    const horizontal = gameboard().placeShip(3,[3,3],'horizontal')
    expect(horizontal.tiles).toStrictEqual([[3, 3], [4, 3], [5, 3]])
    
    const vertical = gameboard().placeShip(3,[3,3],'vertical')
    expect(vertical.tiles).toStrictEqual([[3, 3], [3, 4], [3, 5]])
});