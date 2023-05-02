/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */

// 方法1： 双循环枚举符合条件的i和j
var powerfulIntegers = function(x, y, bound) {
    let i = 0;
    let ans = new Set();
    if(x === 1 && y === 1) {
        if(bound >= 2) {
            ans.add(2)
        }
    } else if(x === 1 || y === 1) {
        for (let j = 0; Math.pow((x === 1 ? y : x), j) <= bound - 1 ; j++) {
            ans.add(Math.pow((x === 1 ? y : x), j) + 1);
        }
    } else {
        for (let numX = Math.pow(x, i);  numX < bound; i++, numX = Math.pow(x, i)) {
            let j = 0;
            for (let numY = Math.pow(y, j);  numX + numY <= bound; j++, numY = Math.pow(y, j)) {
                console.log(i, j, '+', x, y, '+', numX, numY)
                ans.add(numY + numX);
            }
        }
    }
    return [...ans];
};
