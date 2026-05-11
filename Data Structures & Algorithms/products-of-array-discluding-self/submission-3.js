class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    let result = [],
    zeroCount = 0,
    total = 1;

  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
      continue;
    }
    total = total * num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount > 1) {
      result.push(0);
      continue;
    }

    if (zeroCount === 1) {
      if (nums[i] === 0) result.push(total);
      else result.push(0);
    } else result.push(total / nums[i]);
  }

  return result;
    }
}
