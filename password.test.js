

const generatePassword = require ('./script');

describe ('generatePassword function', (passkey) => {
    test('should generate a password of the correct length', () => {
        const length = 12;
        const password = generatePassword(length, 'medium');
        expect(password).toHaveLength(length);
    });

    test('should throw an error for invalid password length', () => {
        expect(() => generatePassword(0, 'low')).toThrow('Password length must be greater than 0');
        expect(() => generatePassword(-5, 'medium')).toThrow('Password length must be greater than 0');
    });

    test('should throw an error for invalid strength level', () => {
        expect(() => generatePassword(10, 'invalid')).toThrow('Invalid strength level');
    });

    test('should generate a password with only lowercase letters for low strength', () => {
        const password = generatePassword(10, 'low');
        expect(password).toMatch(/^[a-z]+$/);
    });

    test('should generate a password with lowercase and uppercase letters for medium strength', () => {
        const password = generatePassword(10, 'medium');
        expect(password).toMatch(/^[a-zA-Z]+$/);
    });

    test('should generate a password with letters, numbers, and special characters for high strength', () => {

        const password = generatePassword(10, 'high');
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]+$/);
    });
});