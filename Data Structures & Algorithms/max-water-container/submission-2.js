class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
   let l = 0;
let r = heights.length - 1;
let best = 0;

while (l < r) {
    const area =
        (r - l) * Math.min(heights[l], heights[r]);

    best = Math.max(best, area);

    if (heights[l] < heights[r]) {
        l++;
    } else {
        r--;
    }
}

return best;
    }
}
