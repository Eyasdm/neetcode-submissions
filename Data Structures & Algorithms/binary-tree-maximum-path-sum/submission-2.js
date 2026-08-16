class Solution {
    maxPathSum(root) {
        let res = -Infinity;

        function dfs(root) {
            if (!root) return 0;

            let leftMax = dfs(root.left);
            let rightMax = dfs(root.right);

            leftMax = Math.max(leftMax, 0);
            rightMax = Math.max(rightMax, 0);

            // Best path that passes THROUGH this node
            res = Math.max(
                res,
                root.val + leftMax + rightMax
            );

            // Best path that can be extended to the parent
            return root.val + Math.max(leftMax, rightMax);
        }

        dfs(root);
        return res;
    }
}