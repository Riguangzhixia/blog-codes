/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
// 输入：n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
// 输出：1
// n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
var hardestWorker = function (n, logs) {
    let ansId = Infinity;
    let maxWorkTime = 0;
    let preLeaveTime = 0;
    logs.forEach(([id, time]) => {
        let spendingTime = time - preLeaveTime;
        if (maxWorkTime < spendingTime) {
            maxWorkTime = spendingTime;
            ansId = id;
        } else if (maxWorkTime === spendingTime) {
            if (id < ansId) {
                ansId = id;
            }
        }
        preLeaveTime = time;
    })
    return ansId;
};
console.log(hardestWorker(26, [[1,1],[3,7],[2,12],[7,17]]));