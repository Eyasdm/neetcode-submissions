class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   
    search(nums, target) { 
        const minIndex = function  minIndex(nums) {
        let lo = 0;
        let hi = nums.length - 1;

        while (lo < hi) {
            let mid = lo + Math.floor((hi - lo) / 2);

            if (nums[mid] <= nums[hi]) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }

        return lo;
    }
    
        const p = minIndex(nums), last = nums.length - 1;
        let lo = target <= nums[last] ? p : 0;
        let hi = target <= nums[last] ? last: p - 1;

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2);
            if(nums[mid] < target) lo = mid + 1; 
            else if(nums[mid] > target) hi = mid - 1; 
            else return mid
        }
        return -1;
    }


     
}
