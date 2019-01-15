const factorielle = require('./factorielle');

describe("factorielle", () => {
    test('!0', () => {
        expect(factorielle(0)).toEqual(1);
    });

    test('!1', () => {
        expect(factorielle(1)).toEqual(1);
    });

    test('!2', () => {
        expect(factorielle(2)).toEqual(2);
    });

    test('!3', () => {
        expect(factorielle(3)).toEqual(6);
    });

    test('!10', () => {
        expect(factorielle(10)).toEqual(3628800);
    });
});
