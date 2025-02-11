/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const digitsLength = digits.length;
    const ten = 10;

    for (let i = digitsLength - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] < ten) return digits;

        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
};