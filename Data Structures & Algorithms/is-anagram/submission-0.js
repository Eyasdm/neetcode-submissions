class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const normalize = t => t.split("").sort().join();
        return normalize(s) === normalize(t);
    }
}