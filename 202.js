/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1 || n === 7) return true;
    else if (n < 10) return false;
    const map = new Map([
        [0, 0],
        [1, 1],
        [2, 4],
        [3, 9],
        [4, 16],
        [5, 25],
        [6, 36],
        [7, 49],
        [8, 64],
        [9, 81]
    ]);

    while (n !== 1) {
        let sum = 0;
        while (n > 0) {
            sum += map.get(n % 10);
            n = Math.floor(n / 10);
        }
        if (sum < 10 && sum !== 1 && sum !== 7) return false;
        n = sum;
    }

    return true;

};