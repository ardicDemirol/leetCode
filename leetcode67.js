/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");

    let mod = 0;
    let carry = 0;
    let result = "";
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = carry + Number(a[i]) + Number(b[i]);
        mod = sum % 2;
        carry = sum >= 2 ? 1 : 0;
        result = mod.toString() + result;
    }

    if (carry) result = "1" + result;
    return result;
};