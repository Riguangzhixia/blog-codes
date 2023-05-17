/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) {
        return -1;
    }
    let dp = new Array(n).fill(0);
    for (let j = 0, ma = 0; j < n; ++j) {
        ma = Math.max(ma, jobDifficulty[j]);
        dp[j] = ma;
    }
    for (let i = 1; i < d; ++i) {
        const stack = [];
        const ndp = new Array(n).fill(0);
        for (let j = i; j < n; ++j) {
            let mi = dp[j - 1];
            while (stack.length && jobDifficulty[stack[stack.length - 1][0]] < jobDifficulty[j]) {
                mi = Math.min(mi, stack.pop()[1]);
            }
            if (stack.length === 0) {
                ndp[j] = mi + jobDifficulty[j];
            } else {
                ndp[j] = Math.min(ndp[stack[stack.length - 1][0]], mi + jobDifficulty[j]);
            }
            stack.push([j, mi]);
        }
        dp = ndp;
    }
    return dp[n - 1];
};
