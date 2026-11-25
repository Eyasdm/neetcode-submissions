class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let lo = 0, hi = nums.length - 1;
        while(lo < hi){
            let mid = lo + Math.floor((hi - lo) / 2);
            if(nums[mid] <= nums[nums.length -1]) hi = mid;
            else lo = mid + 1;
        }

        return nums[lo];
    }
}
