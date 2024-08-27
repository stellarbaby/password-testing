"use strict";


function generatePassword(length, strength) {
    const lowChars = 'abcdefghijklmnopqrstuvwxyz';
    const mediumChars = lowChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const highChars = mediumChars + '0123456789!@#$%^&*()_+[]{}|;:,.<>?';

    let charSet = '';
    
    switch (strength) {
        case 'low':
            charSet = lowChars;
            break;
        case 'medium':
            charSet = mediumChars;
            break;
        case 'high':
            charSet = highChars;
            break;
        default:
            throw new Error('Invalid strength level');
    }

    if (length <= 0) {
        throw new Error('Password length must be greater than 0');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}; 