class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let cur = "",
      last = 0,
      best = 0;

    for (const char of s) {
      best = Math.max(best, cur.length);
      while (cur.includes(char)) {
        cur = cur.slice(1);
      }
      cur += char;
    }

    return Math.max(best, cur.length);
    }
}
