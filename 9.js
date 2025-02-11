/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let remainder = x;
    let numbers = [];


    while (remainder !== 0) {
        numbers.push(remainder % 10);
        remainder = parseInt(remainder / 10);
    }

    let totalNumber = 0;
    let multiplier = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
        multiplier = 1;
        for (let j = 0; j < i; j++) multiplier *= 10;
        totalNumber += numbers.shift() * multiplier;
    }

    return totalNumber === x;

};