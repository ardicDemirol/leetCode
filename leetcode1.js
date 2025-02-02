/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// // O(n^2) 
// var twoSum = function(nums, target) {
//     for(let i = 0;i<nums.length-1;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if(target=== nums[i] + nums[j]){
//                 return [i,j];
//             }
//         }
//     }
// };

// O(n)
var twoSum = function (nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],i);
    }

    for (let i = 0; i < nums.length; i++) {
        var current = nums[i];
        var x = target - current;
        if (map.has(x) && map.get(x) !== i){
            return [i,map.get(x)];
        }
    }
};