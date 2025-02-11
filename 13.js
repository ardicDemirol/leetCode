/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    let value = 0;
    const n = s.length;

    for (let i = n - 1; i > 0; i--) {
        if (map[s[i - 1]] >= map[s[i]]) {
            value += map[s[i - 1]];
        } else {
            value -= map[s[i - 1]];
        }
    }
    return value + map[s[n - 1]];

};