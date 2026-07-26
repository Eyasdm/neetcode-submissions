class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root ) return true;

        function depth(node) {
            if (!node) return 0;

            const left = depth(node.left);
            const right = depth(node.right);

            console.log(`Node ${node.val}: left=${left}, right=${right}`);

            if (Math.abs(left - right) > 1) return -2;

            return Math.max(left, right) + 1;
        }

        const left = !root.left ? 0 : depth(root.left);
        const right = !root.right ? 0 : depth(root.right);

        if(left === -2 && right === -2) return false
        return !(Math.abs(left - right) > 1);
    }
}