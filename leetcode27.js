/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const numsLength = nums.length;
    let valNum = 0;
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] === val) {
            nums[i] = "_";
            valNum++;
        }
    }
    nums.sort();

    return numsLength - valNum;
};