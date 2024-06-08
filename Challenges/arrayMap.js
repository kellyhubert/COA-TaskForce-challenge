/**
 * author: Kelly hubert Irakoze
 * Description: Given an array of integers and a target sum, determine if there exists a contiguous
 * subarray within the array that sums up to the target. Return true if such a subarray exists,
 * otherwise return false.
 */
function subarraySum(arr, target) {
    // Check if the input is valid
    if (typeof target !== 'number') {
        throw new Error('Target must be a number');
    }
    if (!Array.isArray(arr) || !arr.every((x) => typeof x === 'number')) {
        throw new Error('Input array must be an array of numbers');
    }

    let currentSum = arr[0];
    let startIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        // If the current sum exceeds the target, remove elements from the startIndex
        while (currentSum > target && startIndex < i - 1) {
            currentSum -= arr[startIndex];
            startIndex++;
        }

        // If the current sum equals the target, return true
        if (currentSum === target) {
            return true;
        }

        // Add the current element to the sum
        currentSum += arr[i];
    }

    // Check if the last subarray sums up to the target
    if (currentSum === target) {
        return true;
    }

    return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 10;
const result = subarraySum(arr, target);
console.log(result);
