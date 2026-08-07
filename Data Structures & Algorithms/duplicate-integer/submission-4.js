class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasdup = new Set();
        for(let i = 0 ; i < nums.length ; i++){
            if(hasdup.has(nums[i])) return true 
            hasdup.add(nums[i]);

        }
        return false
    }
}
