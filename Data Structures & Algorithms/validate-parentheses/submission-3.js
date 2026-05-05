class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(const char of s) {
           if (char === "(" || char=== "[" || char === "{") {
            stack.push(char);
            continue
            } else if (stack[stack.length - 1] === "(" && char === ")") {
               stack.pop();
               continue
              } else if (stack[stack.length - 1] === "{" && char === "}") {
               stack.pop();
               continue
              }else if (stack[stack.length - 1] === "[" && char === "]") {
               stack.pop();
               continue
              }
                  return false;
            
        }
        return stack.length === 0;
    }
}
