/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let [fir, sec, thr] = [a,b,c].sort((a,b) => a-b)
    let dis1 = sec-fir;
    let dis2 = thr-sec;
    let min;
    if (dis1 + dis2 === 2) {
            min = 0
    } else if (dis2 <= 2 || dis1 <= 2){
            min = 1
    } else {
        min = 2;
    }
    let max = dis1 + dis2 - 2;
    return [min, max]
};

console.log(numMovesStones(3,21, 27))
