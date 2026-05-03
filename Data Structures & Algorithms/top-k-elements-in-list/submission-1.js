class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let result = [],
    valueFreq = new Map(),
    repeatMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (valueFreq.has(nums[i])) {
      valueFreq.set(nums[i], valueFreq.get(nums[i]) + 1);
    } else valueFreq.set(nums[i], 1);
  }

  for (const [key, value] of valueFreq) {
    const repeatValue = repeatMap.get(value);
    if (repeatMap.has(value)) {
      repeatMap.set(value, [...repeatValue, key]);
    } else repeatMap.set(value, [key]);
  }

  for (const [key, value] of repeatMap) {
    result = [...result, key];
  }
  const sortedRepeats = [...result].sort((a, b) => b - a);
  result = [];
  // console.log(repeatMap);

  for (let i = 0; i < sortedRepeats.length; i++) {
    let valueArr = repeatMap.get(sortedRepeats[i]);
    result = [...result, ...valueArr];
  }

  const finalResult = [];
  for (let i = 0; i < k; i++) {
    finalResult.push(result[i]);
  }

  return finalResult;
    }
}
