class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        let best = 0, cur = 1,current;
        const set = new Set(nums);
        for (const num of set){
            if (!set.has(num - 1))  current = num;
            while (set.has(current + 1)) {
                current++;
                cur++;
             }
             best = Math.max(cur,best);
              cur = 1;
        }
        return best ;
    }
}
