/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    var minLenght = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLenght) minLenght = strs[i].length;
    }

    let prefixList = [];
    let flag = false;
    let char = "";
    for (let i = 0; i < minLenght; i++) {
        let compareValue = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (compareValue === strs[j][i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }

        if (flag) {
            char += compareValue;
        } else {
            if(char !== "") prefixList.push(char);
            char = "";
        }

    }

    if (flag) prefixList.push(char);
        
    

    let longestPrefix = "";
    let longestPrefixIndex = -1;
    for (let i = 0; i < prefixList.length; i++) {
        if(prefixList.length !== 0 && prefixList[i].length > longestPrefix.length){
            longestPrefix = prefixList[i];
            longestPrefixIndex = i;
        }else{
            longestPrefixIndex = -1;
        }

    }

    if(longestPrefixIndex === -1) return "";
    else return prefixList[longestPrefixIndex];
    
};

console.log(longestCommonPrefix(["floabcxxxx","flodefxxxx","floghjxxxx"]));

// ------------------------------------------------------------------------

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    var minLenght = strs[0].length;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLenght) minLenght = strs[i].length;
    }

    let prefix = "";
    for (let i = 0; i < minLenght; i++) {
        let compareValue = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
           if (strs[j][i] !== compareValue) return prefix;
        }

        prefix = prefix.concat(compareValue);
    }
    return prefix;
};



