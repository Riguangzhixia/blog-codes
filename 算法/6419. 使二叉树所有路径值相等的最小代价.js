/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
    let ans = 0;
    let dfs = (i) => {
        if (2 * i + 1 > n) {
            return cost[i - 1]
        }
        let lconst = dfs(i * 2);
        let rconst = dfs(i * 2 + 1);
        let max = Math.max(lconst, rconst);
        ans += Math.abs(lconst-rconst)
        return max + cost[i - 1];
    }
    dfs(1);
    return ans;
};

// let n = 7, cost = [1,5,2,2,3,3,1];
// let n = 3, cost = [5,3,3]
let n = 15, cost = [764, 1460, 2664, 764, 2725, 4556, 5305, 8829, 5064, 5929, 7660, 6321, 4830, 7055, 3761];
console.log(minIncrements(n, cost));

var minIncrements = function (n, cost) {
    let ans = 0;
    // 自底向上循环访问子节点
    for (let i = n - 1; i > 0; i -= 2) {
        ans += Math.abs(cost[i] - cost[i - 1]);
        cost[i - 1 >> 1] += Math.max(cost[i], cost[i - 1]);
    }
    return ans;
};