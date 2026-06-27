class Solution {
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let l = 0, r = rows * cols - 1;

        while( l <= r){
           let m = Math.floor((l + r) /2);
           let row = Math.floor(m / cols), col = m % cols;

           let value = matrix[row][col];

           if(value === target) return true;

           if(value < target){
            l = m + 1;
           }else{
            r = m - 1;
           }
        }

        return false
    }
}