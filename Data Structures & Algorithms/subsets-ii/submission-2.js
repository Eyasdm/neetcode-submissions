class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        let subsets = [], curSet = [];
        helper(0 , nums, curSet, subsets);
        
        return subsets;


        function helper(i ,nums, curSet, subsets){
            if(i >= nums.length) {
                subsets.push([...curSet]);
                return
            }

            // decision to include nums[i]
            curSet.push(nums[i]);
            helper(i + 1, nums, curSet, subsets);
            curSet.pop();

            // decision Not to include nums[i];
            while( i + 1 < nums.length && nums[i] === nums[i + 1]){
                i++;
            }
            helper(i + 1, nums, curSet, subsets);
        }


    }
}
