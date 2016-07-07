var power = require('../js/script.js');

describe("Power", function() {
    it("works correctly", function() {
        expect(power.pow(6, 8)).toBe(262144);
    });
});