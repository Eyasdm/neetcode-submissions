class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
            const maxHelper = Math.max(
    helper(nums.slice(1)),
    helper(nums.slice(0, -1))
);

            return Math.max(nums[0], maxHelper)

        function helper(nums){
            let rob1 = 0, rob2 = 0;

            for(const n of nums) {

                const newRob = Math.max(rob1 + n, rob2)
                rob1 = rob2;
                rob2 = newRob;
            }
                return rob2;
        }
    }
}
