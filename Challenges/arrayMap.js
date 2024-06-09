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
        while (Math.abs(currentSum) > Math.abs(target) && startIndex < i - 1) {
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

// this are the example to test my array manipulation implementation
function testing() {
    const testCases = [
        { arr: [1, 2, 3, 7, 5], target: 12, expected: true },
        { arr: [1, 2, 3, 4, 5, 6], target: 9, expected: true },
        { arr: [1, 2, 3, 4, 5], target: 15, expected: true },
        { arr: [1, 2, 3, 4, 5], target: 16, expected: false },
        { arr: [-1, -2, -3, -4, -5], target: -10, expected: true },
        { arr: [1, -1, 1, -1, 1], target: 0, expected: true },
        { arr: [], target: 0, expected: false },
        { arr: [10, 2, -2, -20, 10], target: -10, expected: true },
        { arr: [10, 20, 30, 40], target: 100, expected: true },
        { arr: [1, 2, 3, 4], target: 10, expected: true },
        { arr: [1], target: 1, expected: true },
        { arr: [1], target: 2, expected: false }
    ];

    testCases.forEach((testCase, index) => {
        const { arr, target, expected } = testCase;
        try {
            const result = subarraySum(arr, target);
            console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : "Failed");
        } catch (error) {
            console.log(`Test Case ${index + 1}: Failed with error - ${error.message}`);
        }
    });
}

// Run the testing  function
testing();
