class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        function depth(node) {
            if (!node) return 0;

            const left = depth(node.left);

            // Left subtree is already unbalanced
            if (left === -2) return -2;

            const right = depth(node.right);

            // Right subtree is already unbalanced
            if (right === -2) return -2;

            // Current node is unbalanced
            if (Math.abs(left - right) > 1) return -2;

            // Return height
            return Math.max(left, right) + 1;
        }

        return depth(root) !== -2;
    }
}