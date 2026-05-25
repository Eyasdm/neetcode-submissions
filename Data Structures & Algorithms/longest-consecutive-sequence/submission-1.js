class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        nums.sort((a, b) => a - b)
        let best = 0,cur = 1 ,prev = nums[0];
        for(let i = 1; i < nums.length; i++){
           if(prev === nums[i]) continue;
           if(nums[i] - prev === 1)  cur++ 
           else  {
            best = Math.max(cur, best);
            cur = 1;
            };
           prev = nums[i];
        }
        return Math.max(cur, best);
    }
}
