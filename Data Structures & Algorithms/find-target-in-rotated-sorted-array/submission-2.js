class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target)
        return m;

    // Left half is sorted
    if (nums[l] <= nums[m]) {
        if (target >= nums[l] && target < nums[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    // Right half is sorted
    else {
        if (target > nums[m] && target <= nums[r]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
}

  return -1;
}
}
