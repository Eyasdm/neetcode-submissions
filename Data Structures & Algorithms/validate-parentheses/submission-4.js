class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (!map[char]) {
      // opening bracket
      stack.push(char);
    } else {
      // closing bracket
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
}
