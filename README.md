# File Structure
The file are organized in the following order: 
1. Folder _Challenges_ contain solutions to both coding challenges: _arrayMap.js_ for array manipulation challenge and _stringTransform.js_ for string transformation challenge. 
2. Folder _images_ contain the images displayed in by the web gallery from the UI challenge
3. _gallery.html, __styles.css_ and _script.js_ contains the html code, css styling and javascript for the web gallery, respectively.

# UI Challenge: Interactive Photo Gallery
Interactive photo gallery based on the provided Figma designs, containing features such as image thumbnail navigation, full-size image viewing, and works seamlessly on both desktop and mobile devices.

## How to run
1. Clone this repository to your local machine
sh
git clone https://github.com/kellyhubert/COA-TaskForce-challenge.git

2. Open gallery.html using your local browser
3. To run the coding challenges use your IDE with javascript installed. For simplicity you can copy the content of _arrayMap.js_ or _stringTransform.js_ in a free javascript online interpreter such as https://www.programiz.com/javascript/online-compiler/ 


# Coding Challenge 1: Array Manipulation
Given an array of integers and a target sum, _arrayMap.js_ determine if there exists a contiguous subarray within the array that sums up to the target. It return true if such a subarray exists, otherwise return false

## Approach
1. Initialize current_sum to 0 and start_index pointer to 0, which indicates the start of current subarray.
2. Iterate over the array,  adding the current element to current_sum.
3. After adding current element to sum, subtract the element at the start pointer from current_sum and move the start_index pointer to the right until current_sum is less than the target
4. If current_sum equals the target at any point, return True.
5. If the loop ends without finding a subarray that sums to the target, return False.
6. 

# Coding Challenge 2: String Transformation
Given a string, _stringTransform.js_ reverses it if its length is divisible by 3, replace each character with its ASCII code if the string length is divisible by 5.

## Approach
Create a temporary variable to store the current results. If the string length is divisible by 3 iterate over the string from the back adding each element to the temporary result. If the string length is divisible by 5 iterate over the temporary result replacing each character by its ASCII code. If the string length is divisible by 15 both conditions will be activated in order and it will result in the string being reversed and each character replaced by its ASCII code.# COA-TaskForce-challenge
This challenge aims to create a photo gallery.
