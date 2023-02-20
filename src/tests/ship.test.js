const ship = require("../ship")

test('ship hit', () => {
    const boat = ship(2);
    expect(boat.hit()).toBe(1);
})

test('ship isSunk', () => {
    const testship = ship(3);
    testship.hit();
    testship.hit();
    testship.hit();
    expect(testship.isSunk()).toBe(true);
})