class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];

        let maxProduct = nums[0];
        let minProduct = nums[0];

        for (let i = 1; i < nums.length; i++) {

            let cur = nums[i];

            if (cur < 0) {
                [maxProduct, minProduct] = [minProduct, maxProduct];
            }

            maxProduct = Math.max(cur, cur * maxProduct);
            minProduct = Math.min(cur, cur * minProduct);

            res = Math.max(res, maxProduct);
        }

        return res;
    }
}