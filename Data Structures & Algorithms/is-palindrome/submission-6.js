class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;
        const isAlphaNumeric = c => /[a-z0-9]/i.test(c);

        while(l < r){
            while( l < r && !isAlphaNumeric(s[l])) l++;
            while( l < r && !isAlphaNumeric(s[r])) r--;
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }
}
