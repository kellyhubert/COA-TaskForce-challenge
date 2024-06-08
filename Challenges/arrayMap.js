"""
author: Kelly hubert Irakoze
Description: Given an array of integers and a target sum, determine if there exists a contiguous
 subarray within the array that sums up to the target. Return true if such a subarray exists,
 otherwise return false.
"""
def subarray_sum(arr, target):
    # Check if the input is valid
    assert isinstance(target, int), "Target must be an integer"
    assert isinstance(arr, list) and all(isinstance(x, int) for x in arr), "Input array must be a list of integers"

    current_sum = arr[0]
    start_index = 0

    for i in range(1, len(arr)):
        # If the current sum exceeds the target, remove elements from the start_index
        while current_sum > target and start_index < i - 1:
            current_sum -= arr[start_index]
            start_index += 1

        # If the current sum equals the target, return True
        if current_sum == target:
            return True

        # Add the current element to the sum
        current_sum += arr[i]

    # Check if the last subarray sums up to the target
    if current_sum == target:
        return True

    return False

# Example usage
arr = [4, 2, 7, 1, 9, 5]
target = 10
result = subarray_sum(arr, target)
print(result)

