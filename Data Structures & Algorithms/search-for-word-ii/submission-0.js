class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    addWord(word) {
        let cur = this;

        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }

            cur = cur.children[c];
        }

        cur.isWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        const root = new TrieNode();

        for (const word of words) {
            root.addWord(word);
        }


        const ROWS = board.length;
        const COLS = board[0].length;

        const res = new Set();
        const visit = new Set();

        function dfs(r, c, node, word) {

            // Out of bounds
            // Character doesn't exist in Trie
            // Cell already visited
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                !(board[r][c] in node.children) ||
                visit.has(`${r},${c}`)
            ) {
                return;
            }


            // Mark this cell as visited
            visit.add(`${r},${c}`);


            // Move through the Trie
            node = node.children[board[r][c]];


            // Add current character to word
            word += board[r][c];


            // Did we find a complete word?
            if (node.isWord) {
                res.add(word);
            }

            // DOWN
            dfs(r + 1, c, node, word);

            // UP
            dfs(r - 1, c, node, word);

            // LEFT
            dfs(r, c - 1, node, word);

            // RIGHT
            dfs(r, c + 1, node, word);


            // BACKTRACK
            visit.delete(`${r},${c}`);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root, "");
            }
        }


        // Convert Set → Array
        return [...res];
    }
}