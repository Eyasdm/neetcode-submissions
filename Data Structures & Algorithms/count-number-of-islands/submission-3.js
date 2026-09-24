class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        

        let islands = 0;
        let visit = new Set();

        const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

const bfs = (r, c) => {
    const q = [[r, c]];
    let front = 0;

    visit.add(`${r},${c}`);

    while (front < q.length) {
        const [row, col] = q[front++];

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;

            if (
                nr >= 0 &&
                nr < ROWS &&
                nc >= 0 &&
                nc < COLS &&
                grid[nr][nc] === "1" &&
                !visit.has(`${nr},${nc}`)
            ) {
                q.push([nr, nc]);
                visit.add(`${nr},${nc}`);
            }
        }
    }
};

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {

                if (
                    grid[r][c] === "1" &&
                    !visit.has(`${r},${c}`)
                ) {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}