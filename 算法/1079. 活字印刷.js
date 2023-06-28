// 官方DFS回溯
var numTilePossibilities = function(tiles) {
    const count = new Map()
    for (let t of tiles) {
        count.set(t, (count.get(t) || 0) + 1)
    }
    const tile = new Set(tiles)
    const n = tiles.length

    function dfs(i) {
        if (i == n) {
            return 1
        }
        let res = 1
        for (let t of tile) {
            if (count.get(t) > 0) {
                count.set(t, count.get(t) - 1)
                res += dfs(i + 1)
                count.set(t, count.get(t) + 1)
            }
        }
        return res
    }

    return dfs(0) - 1
}

// 排序并回溯
var numTilePossibilities = function(tiles) {
    const arr = tiles.split('').sort()
    const n = arr.length
    const used = new Array(n).fill(false)
    let ans = 0
    const backtrack = () => {
        for (let i = 0; i < n; i++) {
            if (!used[i]) {
                if (i > 0 && arr[i] == arr[i - 1] && !used[i - 1]) continue
                ++ans
                used[i] = true
                backtrack()
                used[i] = false
            }
        }
    }
    backtrack()
    return ans
};
// fn = fn-1 + 剩余未使用字符数
var numTilePossibilities = function(tiles) {
    let sum = 0;
    function cal(list, n) {
        let ns = Array.from(new Set(Array.from(list)));
        sum += ns.length;
        for (let i = 0, l = ns.length; i < l; i++) {
            if (n > 1) {
                cal(list.replace(ns[i], ''), n - 1);
            }
        }
    }
    cal(tiles, tiles.length);
    return sum;
};