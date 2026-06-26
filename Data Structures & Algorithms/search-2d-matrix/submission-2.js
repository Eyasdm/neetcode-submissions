class Solution {
    searchMatrix(matrix, target) {
        let row = 0,
            l = 0,
            r = matrix[0].length - 1;

        while (row < matrix.length) {
            let arr = matrix[row];

            while (l <= r) {
                let m = Math.floor((l + r) / 2);

                if (arr[m] > target) {
                    r = m - 1;
                } else if (arr[m] < target) {
                    l = m + 1;
                } else {
                    return true;
                }
            }

            row++;

            if (row === matrix.length) {
                return false;
            }

            if (matrix[row][0] > target) {
                return false;
            }

            l = 0;
            r = matrix[row].length - 1;
        }

        return false;
    }
}