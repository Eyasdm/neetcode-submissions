class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const normalize = (str) => str.split("").sort().join();
  let result = [],
    compare = new Map();

  for (let word of strs) {
    result.push(normalize(word));
  }
  for (let i = 0; i < strs.length; i++) {
    if (!compare.has(result[i])) compare.set(result[i], []);

    compare.get(result[i]).push(strs[i]);
  }

  result = [];
  for (const [key, value] of compare) {
    result.push(value);
  }
  return result;
    }
}
