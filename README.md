# Programming Exercises: Two Number Sum and Non-Constructible Change

This repository contains two programming exercises solved in JavaScript.

- **findPairWithSum**: Finds a pair of numbers in an array that sum up to a target amount.
- **minAmountOfChange**: Calculates the minimum amount of change that cannot be formed using a set of coins.

## Requirements

- Node.js (version 12 or higher)
- npm as the package manager

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/MarianoL68/logic-exercises.git

2. Navigate to the project directory:
   ```bash
   cd logic-exercises

3. Install the dependencies:
    ```bash
    npm install

## Running the Exercises

- The exercises are run with tests to verify their correct functionality.
- To run the tests for both exercises:
  ```bash
  npm test

- To run tests for the first exercise (twoNumberSum):
  ```bash
  npm run test:01

- To run tests for the second exercise (non-ConstructibleChange):
  ```bash
  npm run test:02

## File Structure

- challenge_1/twoNumberSum.js: Contains the findPairWithSum function.
- challenge_2/non-ConstructibleChange.js: Contains the minAmountOfChange function.
- challenge_1/twoNumberSum.test.js and challenge_2/non-ConstructibleChange.test.js: Contain the unit tests for the
  functions.


## Usage Examples

**findPairWithSum(numbers, targetSum)**
Input: [2, 7, 11, 15], 9
Output: [2, 7]

**minAmountOfChange(coins)**
Input: [5, 7, 1, 1, 2, 3, 22]
Output: 20
