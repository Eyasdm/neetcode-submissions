class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
    let combs = [];
    helper(1, [], combs, n, k);
    return combs;

    function helper(i, curComb, combs, n, k){
        if (curComb.length === k){
            combs.push([...curComb]);
            return;
        }

        if(i > n ){
            return;
        }

        // include i
        curComb.push(i);
        helper(i+1, curComb, combs, n, k );
        curComb.pop();

        // Don't include i
        helper(i+1, curComb, combs, n , k);
    }    
    }
}
