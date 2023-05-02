// 方法1：构建邻接表结构，深度|广度遍历
var numOfMinutes = function(n, headID, manager, informTime) {
    // 构建树的邻接表，使用 Map 存储
    const g = new Map();
    // 定义深度优先遍历函数
    const dfs = (cur, informTime) => {
        // res 存储当前节点的所有下属中，最大的通知时间
        let res = 0;

        // 遍历当前节点的每个下属
        for (const neighbor of g.get(cur) || []) {
            // 递归计算下属的通知时间，并更新 res
            res = Math.max(res, dfs(neighbor, informTime));
        }
        // 返回当前节点的通知时间（加上下属中最大的通知时间）
        return informTime[cur] + res;
    };

    // 构建员工与其下属列表的邻接表
    for (let i = 0; i < n; i++) {
        if (!g.has(manager[i])) {
            g.set(manager[i], []);
        }
        g.get(manager[i]).push(i);
    }

    // 自顶向下计算总通知时间
    return dfs(headID, informTime);
}


// 方法2：记忆化直接自底向上遍历manager每个节点到根节点的路程，最后取出最大值

var numOfMinutes = function(n, headID, manager, informTime) {
    const dfs = (manager, informTime, memo, x) => {
        if (manager[x] < 0) return informTime[x];
        if (memo[x] >= 0) return memo[x]; // 之前计算过了
        return memo[x] = dfs(manager, informTime, memo, manager[x]) + informTime[x];
    };

    let memo = Array.from({length: n});
    memo.fill(-1); // -1 表示还没有计算过
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, dfs(manager, informTime, memo, i));
    }
    return ans;
}

// console.log(numOfMinutes(1, 0, [-1], [0]))
// console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]))
// console.log(numOfMinutes(15, 0, [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(numOfMinutes(11, 4, [5,9,6,10,-1,8,9,1,9,3,4], [0,213,0,253,686,170,975,0,261,309,337]))
