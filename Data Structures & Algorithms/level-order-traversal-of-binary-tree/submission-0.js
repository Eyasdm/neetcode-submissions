/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
    if (!root) return [];

    let queue = [],
      result = [],
      currentLevel = [];

    queue.push(root);

    while (queue.length > 0) {
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        let cur = queue.shift();
        currentLevel.push(cur.val);

        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }

      result.push(currentLevel);
      currentLevel = [];
    }
    return result;
    }
}
