class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const cnt = new Array(26).fill(0);

let left = 0;
let best = 0;

for (let right = 0; right < s.length; right++) {

    cnt[s.charCodeAt(right) - 65]++;

    while (
        (right - left + 1) - Math.max(...cnt) > k
    ) {
        cnt[s.charCodeAt(left) - 65]--;
        left++;
    }

    best = Math.max(best, right - left + 1);
}

return best;
    }
}
