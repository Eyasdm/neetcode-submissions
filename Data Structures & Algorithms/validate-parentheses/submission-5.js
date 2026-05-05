class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
  const stack = [];
  const closeToOpen = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (!closeToOpen[char]) {
      // opening bracket
      stack.push(char);
    } else {
      // closing bracket
      if (stack.length === 0 || stack.pop() !== closeToOpen[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
}
