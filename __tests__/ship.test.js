/* globals describe it expect */
const Ship = require('../src/ship.js')

describe('Ship', () => {
    let port;
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object)
    });

    it('it has a starting port', () => {
        const ship = new Ship('Dover')
        expect(ship.startingPort).toBe(port);
    });
});