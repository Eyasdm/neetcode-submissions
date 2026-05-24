class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sell,buy = prices[0] , best = 0;

        for(let i = 1; i < prices.length ; i++){
            let currProfit = prices[i] - buy;

            if(currProfit > best){
                sell = prices[i];
                best = currProfit;
            }else buy = Math.min(buy, prices[i]);

        }

        return best;
    }
}
