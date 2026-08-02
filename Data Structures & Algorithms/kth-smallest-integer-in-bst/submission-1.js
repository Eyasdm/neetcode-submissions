class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let answer = null;

        function inorder(node) {
            if (!node || answer !== null) return;

            inorder(node.left);

            count++;

            if (count === k) {
                answer = node.val;
                return;
            }

            inorder(node.right);
        }

        inorder(root);

        return answer;
    }
}