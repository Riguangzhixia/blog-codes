/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let map = new Map();
    for (let index = 0; index < n; index++) {
       map.set(index + 1, 0);
    }
    let i = 1;
    let round = 1;
    while(map.get(i) !== 1) {
        map.set(i, 1);
        i = (i + k * round) % n;
        if (i === 0) i = n;
        round++;
    }
    let res =  Array.from(map.entries()).filter(([key, value]) => {
        return value === 0;
    }).map(([key,value]) => key);
    return res;
};
console.log(circularGameLosers(4, 4));
