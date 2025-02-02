/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map();
    const numsLength = nums.length;
    let maxKey = -Infinity;
    let maxValue = -Infinity;

    if(numsLength === 1) return nums[0];
    for (let i = 0; i < numsLength; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            const currentValue = map.get(nums[i]);
            map.set(nums[i], currentValue + 1);
            if (currentValue + 1 > maxValue) {
                maxValue = currentValue + 1;
                maxKey = nums[i];
            }
        }
    }

    
    return maxKey;

};