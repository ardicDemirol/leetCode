/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.includes(needle)) return -1;
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    let index = -1;

    
    for (let i = 0; i < haystackLength; i++) {
        if (haystack[i] === needle[0]) {
            index = i;
            for (let j = 0; j <= needleLength - 1; j++) {
                if (haystack[i + j] !== needle[j]) index = -1;
            }
            if (index === i) return index;
        }
    }

    // 2nd Solution
    // const haystackLength = haystack.length;
    // const needleLength = needle.length;

    // for (let i = 0; i <= haystackLength - needleLength; i++) {
    //     let pattern = haystack.substring(i, i + needleLength);
    //     if (pattern === needle) return i;
    // }

    // return -1;

};