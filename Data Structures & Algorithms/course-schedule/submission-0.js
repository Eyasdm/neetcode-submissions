class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preMap = {};
        for(let i = 0 ; i < numCourses ; i++){
            preMap[i] = [];
        }

        for(const [crs, pre] of prerequisites){
            preMap[crs].push(pre);
        }

        let visitSet = new Set();

        function dfs(crs){
            if(visitSet.has(crs)) return false;
            if(preMap[crs].length === 0) return true;

            visitSet.add(crs);
            for(const pre of preMap[crs]){
                if(!dfs(pre)) return false;
            }
            visitSet.delete(crs);
            preMap[crs] = [];
            
            return true;
        }

        for(let i = 0 ; i < numCourses ; i++){
            if(!dfs(i)) return false;
        }

        return true;
    }
}
