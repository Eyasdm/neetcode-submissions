class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let result = [],
    valueMap = new Map(),
    repeatMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (valueMap.has(nums[i])) {
      valueMap.set(nums[i], valueMap.get(nums[i]) + 1);
    } else valueMap.set(nums[i], 1);
  }

  for (const [key, value] of valueMap) {
    const repeatValue = repeatMap.get(value);
    if (repeatMap.has(value)) {
      repeatMap.set(value, [...repeatValue, key]);
    } else repeatMap.set(value, [key]);
  }

  for (const [key, value] of repeatMap) {
    result = [...result, key];
  }
  let sortedRepeats = [...result].sort((a, b) => b - a);
  result = [];
  // console.log(repeatMap);

  for (let i = 0; i < sortedRepeats.length; i++) {
    let valueArr = repeatMap.get(sortedRepeats[i]);
    result = [...result, ...valueArr];
  }

  sortedRepeats = [];
  for (let i = 0; i < k; i++) {
    sortedRepeats.push(result[i]);
  }

  return sortedRepeats;
    }
}
