const getPalindromes = require('./palindrome');

test('[]', () => {
    expect(getPalindromes([])).toEqual([]);
});

test('[""]', () => {
    expect(getPalindromes([""])).toEqual([""]);
});

test('["mot"]', () => {
    expect(getPalindromes(["mot"])).toEqual([]);
});

test('["kayak"]', () => {
    expect(getPalindromes(["kayak"])).toEqual(["kayak"]);
});


test('["kayak", "mot", "laval"]', () => {
    expect(getPalindromes(["kayak", "mot", "laval"])).toEqual(["kayak", "laval"]);
});

test('["elle", "alla", "radar", "faux"]', () => {
    expect(getPalindromes(["elle", "alla", "radar", "faux"])).toEqual(["elle", "alla", "radar"]);
});