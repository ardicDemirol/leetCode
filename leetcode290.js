/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    s = s.split(" ");
    if(pattern.length != s.length) return false;

    const map = new Map();
    const sMap = new Map();

    for (let i = 0; i < s.length;i++){
        if(!map.has(pattern[i]) && !sMap.has(s[i])){
            map.set(pattern[i],s[i]);
            sMap.set(s[i],true);
        }
        else if (map.get(pattern[i]) !== s[i]) return false;
    }
    return true;
};