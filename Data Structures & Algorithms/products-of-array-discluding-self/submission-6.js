class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let result = [1],
    accumulator = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0) {
 accumulator = nums[i] * accumulator;
      result.push(accumulator);      continue;
    }
    accumulator = accumulator * nums[i];
    result.push( accumulator);
  }

  accumulator = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    accumulator = accumulator * nums[i];
    result[i - 1] = result[i - 1] * accumulator;
  }

  return result;
    }
}
