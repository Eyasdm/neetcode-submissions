class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles),res = Infinity;

        const findH = function(k) {
            let res = 0;

            for (let i = 0; i < piles.length; i++) {
                res += Math.ceil(piles[i] / k);
            }

            return res;
        }

        while( l <= r){
            let m = Math.floor((l + r)/ 2);
            if (findH(m) <= h) {
                res = Math.min(res, m);
                r = m - 1; // search for a smaller valid speed
            } else {
                l = m + 1; // speed too slow, need to go faster
            }
        }
        return res
    }
}
