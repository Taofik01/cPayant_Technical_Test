const { transformString } = require('../src/stringManipulation');


test('Transform String Correctly', () => {
    expect(transformString('Hello, World!')).toBe('hLL, wRLD!');
    expect(transformString('Aeiou')).toBe('');
    expect(() => transformString(123)).toThrow('Input must be a string.')
});