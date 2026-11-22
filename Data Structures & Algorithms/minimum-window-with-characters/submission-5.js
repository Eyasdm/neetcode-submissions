
class Solution {
    minWindow(s, t) {
        if (t === "") return "";

        const countT = new Map();
        const window = new Map();

        for (const c of t) {
            countT.set(c, (countT.get(c) ?? 0) + 1);
        }

        let have = 0;
        let need = countT.size;
        let res = [-1, -1];
        let resLen = Infinity;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const c = s[right];

            window.set(c, (window.get(c) ?? 0) + 1);

            if (countT.has(c) && window.get(c) === countT.get(c)) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < resLen) {
                    res = [left, right];
                    resLen = right - left + 1;
                }

                window.set(s[left], window.get(s[left]) - 1);

                if (
                    countT.has(s[left]) &&
                    window.get(s[left]) < countT.get(s[left])
                ) {
                    have--;
                }

                left++;
            }
        }

        const [lft, right] = res;

        return resLen === Infinity
            ? ""
            : s.slice(lft, right + 1);
    }
}
