const findPairWithSum = require('../challenge_1/twoNumberSum');
const { describe, it, expect } = require('@jest/globals');

describe('findPairWithSum', () => {
    
    it('finds a pair that sums to targetSum', () => {
        const numbers = [2, 7, 11, 15];
        const targetSum = 9;
        expect(findPairWithSum(numbers, targetSum)).toEqual([2, 7]);
    });
    
    it('returns an empty array if no pair sums to targetSum', () => {
        const numbers = [1, 2, 3, 4];
        const targetSum = 8;
        expect(findPairWithSum(numbers, targetSum)).toEqual([]);
    });
    
    it('handles negative numbers', () => {
        const numbers = [-3, 4, 1, 5];
        const targetSum = 2;
        expect(findPairWithSum(numbers, targetSum)).toEqual([-3, 5]);
    });
    
    it('returns empty array if only one number equals targetSum', () => {
        const numbers = [6, 3, 5];
        const targetSum = 6;
        expect(findPairWithSum(numbers, targetSum)).toEqual([]);
    });

});
