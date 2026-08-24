class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let path = [];

        function dfs(i, remaining){
            if (remaining === 0){
                res.push([...path]);
                return;
            } 
            if( i >= nums.length || remaining < 0 ) return;

            path.push(nums[i]);
            dfs(i, remaining - nums[i]);
            path.pop();

            dfs(i + 1, remaining);
        }

        dfs(0, target);
        return res
    }
}
