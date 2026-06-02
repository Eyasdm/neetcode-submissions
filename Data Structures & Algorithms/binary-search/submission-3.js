class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0 , hi = nums.length - 1;

        while( lo <= hi ) {
            let mid = Math.trunc((lo + hi) / 2)
            if(nums[mid] === target ) {
                return mid
            }else if(nums[mid] < target) {
                lo = mid + 1;
            }else {
                hi = mid - 1 
            }
        }

        return -1;
    }
}
