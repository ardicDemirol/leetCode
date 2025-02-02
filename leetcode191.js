/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    bitsLength = Math.floor(Math.log2(n)) + 1;

    let count = 0;
    for (let i = bitsLength - 1; i >= 0; i--) {
        value = Math.pow(2, i)
        if (value <= n) {
            n -= value;
            count++
        }
    }
    return count;
};