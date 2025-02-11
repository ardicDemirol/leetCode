/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
    const numsLength = nums.length;
    const output = [];
    let min = nums[0];
    let max = nums[0];
    let count = 0;
    for (let i = 1; i <= numsLength - 1; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            if (count === 0) output.push(`${min}`);
            else output.push(`${min}->${max}`);
            min = nums[i];
            max = nums[i];
            count = 0;
        } else {
            max = nums[i];
            count++;
        }
    }

    if (count === 0) output.push(`${min}`);
    else output.push(`${min.toString()}->${max}`);

    return output;

};