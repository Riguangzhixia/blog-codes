/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
    let directs = [[-1, 1], [0, 1], [1, 1]];
    let maxDis = 0;

    let j = 0;
    let quene = [];
    for (let i = 0; i < grid.length; i++) {
        let start = `${i}+${j}`;
        quene.push(start);
    }
    let dis = 0;
    while (quene.length > 0) {
        let len = quene.length;
        for (let node = 0; node < len; node++) {
            let curIndex = quene.shift().split('+');
            let cur = grid[curIndex[0]][curIndex[1]];
            for (let d = 0; d < directs.length; d++) {
                const direct = directs[d];
                let newRow = parseInt(curIndex[0]) + direct[0];
                let newCol = parseInt(curIndex[1]) + direct[1];
                if (0 <= newRow && newRow < grid.length && 0 <= newCol && newCol < grid[0].length) {
                    let next = grid[newRow][newCol];
                    if (next > cur) {
                        quene.push(`${newRow}+${newCol}`)
                    }
                }
            }
        }
        quene = [...new Set(quene)]
        if (quene.length > 0) {
            dis++;
        }
        if (dis === grid[0].length - 1) {
            return dis;
        }
        maxDis = Math.max(maxDis, dis);
    };
    return maxDis;
}
console.log(maxMoves([[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]));