const minAmountOfChange = require('../challenge_2/non-ConstructibleChange');
const { describe, it, expect } = require('@jest/globals');

describe('minAmountOfChange', () => {
    
    it('returns the minimum change that cannot be created with [1, 2, 5]', () => {
        const coins = [1, 2, 5];
        expect(minAmountOfChange(coins)).toBe(4);
    });
    
    it('returns 1 when no coins are provided', () => {
        const coins = [];
        expect(minAmountOfChange(coins)).toBe(1);
    });

    it('returns the minimum change that cannot be created with [1, 1, 1, 1, 1]', () => {
        const coins = [1, 1, 1, 1, 1];
        expect(minAmountOfChange(coins)).toBe(6);
    });

    it('returns the minimum change that cannot be created with [5, 7, 1, 1, 2, 3, 22]', () => {
        const coins = [5, 7, 1, 1, 2, 3, 22];
        expect(minAmountOfChange(coins)).toBe(20);
    });

    it('returns the minimum change that cannot be created with [1, 3, 2, 1, 6, 9, 7]', () => {
        const coins = [1, 1, 2, 3, 6, 7, 9];
        expect(minAmountOfChange(coins)).toBe(30);
    });

});
