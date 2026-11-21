class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = new Map();

for (const c of t) {
    need.set(c, (need.get(c) ?? 0) + 1);
}

let missing = t.length;
let left = 0;

let bestL = 0;
let bestLen = Infinity;

for (let right = 0; right < s.length; right++) {

    const c = s[right];

    if ((need.get(c) ?? 0) > 0) {
        missing--;
    }

    need.set(c, (need.get(c) ?? 0) - 1);

    while (missing === 0) {

        if (right - left + 1 < bestLen) {
            bestLen = right - left + 1;
            bestL = left;
        }

        const d = s[left];
        left++;

        need.set(d, (need.get(d) ?? 0) + 1);

        if (need.get(d) > 0) {
            missing++;
        }
    }
}

return bestLen === Infinity
    ? ""
    : s.slice(bestL, bestL + bestLen);
    }
}
