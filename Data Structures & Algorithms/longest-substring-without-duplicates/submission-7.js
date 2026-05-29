class Solution {
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let left = 0;
        let best = 0;

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            best = Math.max(best, right - left + 1);
        }

        return best;
    }
}
