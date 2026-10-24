class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
         const n = s.length;
    const dp = new Array(n + 1).fill(0);

    dp[n] = 1;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "0") {
            dp[i] = 0;
        } else {
            // Decode one digit
            dp[i] = dp[i + 1];

            // Decode two digits if the number is between 10 and 26
            if (
                i + 1 < n &&
                (s[i] === "1" ||
                    (s[i] === "2" && s[i + 1] <= "6"))
            ) {
                dp[i] += dp[i + 2];
            }
        }
    }

    return dp[0];
    }
}
