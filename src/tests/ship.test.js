const ship = require("../ship")

test('ship hit', () => {
    expect(ship(1).hit()).toBe(1);
})

test('ship isSunk', () => {
    const testship = ship(3);
    testship.hit();
    testship.hit();
    testship.hit();
    expect(testship.isSunk()).toBe(true);
})