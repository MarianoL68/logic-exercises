/*
# Two Number Sum
Given an array of integers, no number in this array is repeated, and an integer representing the target sum, 
implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. 
Return the pair in an array. If such pair does not exist, return an empty array.
*/

/* The function works by iterating through the array and calculating the complement 
 * (the number needed to reach the target sum) for each number. It checks if the 
 * complement has already been seen, and if so, returns the pair. If not, the current 
 * number is added to the list of seen numbers for future comparison.
 */

function findPairWithSum(numbers, targetSum) {
    const seenNumbers = []; // Array to store the numbers already seen

    for (let number of numbers) {
        const complement = targetSum - number; // Calculate what number is needed to equal targetSum

        if (seenNumbers.includes(complement)) {
            // If the complement was found, the pair is returned
            return [complement, number];
        }

        // If not found, the current number is added to the array of seen numbers
        seenNumbers.push(number);
    }

    // If no pair is found, an empty array is returned
    return [];
}

module.exports = findPairWithSum
