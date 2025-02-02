/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.unshift(s[i]);
        } else {
            if (close.indexOf(s[i]) !== open.indexOf(stack[0])) return false;
            else stack.shift(s[i]);
        }
    }
    return stack.length <= 0;;
};




