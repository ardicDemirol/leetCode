/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const numsLength = nums.length;
    let index = 1;
    for (let i = 1; i < numsLength; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};