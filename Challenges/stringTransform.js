// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/**
 * author: Kelly hubert Irakoze
 * Description: Given a string:
 * If the length is divisible by 3, the string is reversed. 
 * If the length is divisible by 5, each character is replaced with its ASCII code. 
 * If the length is divisible by both 3 and 5, the operations are performed in the specified order.
 */
function stringTransform(str) {
    let result = str;
    // reverse if length is divisible by 3 
    if (result.length % 3 === 0) {
        tmp = ""
        for (let i = result.length - 1; i >= 0; i--) {
            tmp += result[i];
        }
        result = tmp
    }
    // replace with ASCII code if length is divisible by 5
    if (result.length % 5 === 0) {
        tmp = ""
        for (let i = 0; i < result.length; i++) {
            tmp = tmp + result.charCodeAt(i) + " ";
        }
        result = tmp.slice(0, -1)
    }
    // return a message if length is not divisible by 3 or 5
    if (result.length % 3 !== 0 && str.length % 5 !== 0) {
        return "Length is not divisible by 3 or 5";
    }
    return result;
}
// example usage
console.log(stringTransform("Pizza"));
console.log(stringTransform("Hamburger"));
console.log(stringTransform("Hello, World!"));
console.log(stringTransform("Chocolate Chip!"));