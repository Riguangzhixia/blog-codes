/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    let map = new Map();
    for (let i = s.length; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            let str = s.slice(j, i);
            let num = parseInt(str, 2);
            map.set(num, 1);
        }
    }
    for (let index = 1; index <= n; index++) {
        if (!map.has(index)) {
            return false;
        }
    }
    return true;
};
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    for (let index = 1; index <= n; index++) {
        let str = index.toString(2);
        if (!s.includes(str)) {
            return false;
        }
    }
    return true;
};
