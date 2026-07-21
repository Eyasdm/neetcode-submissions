class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // define l = first num, r = last num
        let l = 0 , r = nums.length - 1; 
        // loop over nums while l is less or equal to r
        while(l <= r){
        //  define m = (l + r) // 2
        let m = Math.floor((l + r) / 2);
        //  if m > target search left (r = m - 1)
        if(nums[m] > target){
            r = m - 1;
        }else if(nums[m] < target){
        //  else if m < target search right ( l = m + 1)
            l = m + 1
        }else {
        //  else return m
            return m;
        }
        }
        // return -1
        return -1;
        
    }
}
