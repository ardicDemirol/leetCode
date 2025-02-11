/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let right = s.length - 1;
    let count = 0;
    const empty = " ";
    
    while (right >= 0 &&  s[right] === empty) right--;
    while (right >= 0 && s[right] !== empty) {
        right--;
        count++;
    }
    return count;
};