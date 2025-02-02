/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const onlyAlphanumeric = s.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    let left = 0; right = onlyAlphanumeric.length - 1;

    while (right >= left) {
        if (onlyAlphanumeric[left] !== onlyAlphanumeric[right]) return false;
        left++;
        right--;
    }
    return true;
};

