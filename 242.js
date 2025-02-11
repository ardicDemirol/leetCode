/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const map = new Map();

    if(s.length != t.length) return false;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        if(map.has(t[i])){
            const newValue = map.get(t[i]) -1;
            if(newValue < 0) return false;
            map.set(t[i],newValue);
        }
        else return false;
    }
    return true;

};