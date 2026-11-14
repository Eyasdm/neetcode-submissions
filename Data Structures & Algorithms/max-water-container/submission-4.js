class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1, best = 0;

        while(left < right){
            const width = right - left;
            const area = Math.min(heights[left], heights[right]) * width

            best = Math.max(area, best);
            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        }

        return best;

    }
}
