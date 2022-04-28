/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        curNum = nums[i];

        for(let b = i + 1; b < nums.length; b++) {
            lNum = curNum + nums[b];

            if(lNum == target){
               return [i, b];
            }
        }
    }

};
