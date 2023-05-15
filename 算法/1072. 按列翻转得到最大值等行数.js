/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    let map = new Map();
    let maxSameRows = 0;
    matrix.forEach(row => {
        let binaryNum = row.join('');
        let one = Array.from({ length: row.length }).fill(1).join('');
        let revertNum = (parseInt(binaryNum, 2) ^ parseInt(one, 2)).toString(2).padStart(row.length, 0);
        let curRows;
        if (map.has(binaryNum)) {
            curRows = map.get(binaryNum) + 1;
            map.set(binaryNum, curRows);
        } else if (map.has(revertNum)) {
            curRows = map.get(revertNum) + 1
            map.set(revertNum, curRows);
        } else {
            curRows = 1;
            map.set(binaryNum, 1);
        }
        maxSameRows = Math.max(curRows, maxSameRows);
    })
    return maxSameRows;
};

console.log(maxEqualRowsAfterFlips([[0,1],[1,0]]));