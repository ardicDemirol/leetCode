/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = new Map();
    const valueMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        if (!map.has(sChar) && !valueMap.has(tChar)) {
            map.set(sChar, tChar);
            valueMap.set(tChar, 0);
        }
        if (map.get(sChar) !== tChar) return false;
    }
    return true;
};