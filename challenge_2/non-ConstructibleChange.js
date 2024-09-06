/*
# Non-Constructible Change
Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money) that you**cannot**create. 
The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins 
of the same value).
For example, if you’re given coins =`[1, 2, 5]`, the minimum amount of change that you can’t create is`4`. 
If you’re given no coins, the minimum amount of change that you can’t create is 1.
*/

/* This function works by first sorting the array of coins in ascending order. It then iterates 
* through the sorted coins, trying to create all amounts of change up to the current minimum 
* value of change that can't be formed ("minChange"). If a coin is found that is larger than 
* "minChange", it means that "minChange" cannot be created with the coins seen so far, so it's returned.
* Otherwise, the value of the current coin is added to "minChange", and the process continues.
*/

function minAmountOfChange(coins) {
    let minChange = 1;
    coins.sort((a, b) => a - b); // The numbers in the array are sorted in ascending order

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > minChange) {
            return minChange; // Returns the first value that cannot be formed with the available coins
        }
        minChange += coins[i]; // Increment minChange by the current coin value
    }

    return minChange; // Returns minChange if all coins could be used without leaving unformed values.
}

module.exports = minAmountOfChange;
