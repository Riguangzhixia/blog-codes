/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    if (k % 2 === 0) {
        return -1;
    }
    let ans = 0;
    let res = '';
    let len = 0;
    while (!ans || !ans.toString().match(/^1+$/)) {
        let canSetToOne = false;
        for (let index = 1; index < 10; index++) {
            if (((index * k + ans) % 10) === 1) {
                res += 1;
                len++;
                ans = parseInt((ans + index * k) / 10);
                while (ans % 10 === 1) {
                    ans = parseInt(ans / 10);
                    len++;
                }
                if (ans === 0) {
                    break;
                }
                canSetToOne = true;
            }
        }
        if (ans === 0 && len !== 0) {
            return len;
        }
        if (!canSetToOne) {
            return -1;
        }
    }
    return len;
};
console.log(smallestRepunitDivByK(1));


var smallestRepunitDivByK = function(k) {
    // 如果 k 是偶数或者是 5 的倍数，则无法整除，直接返回 -1
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }
    let resid = 1 % k, len = 1;
    while (resid !== 0) {
        resid = (resid * 10 + 1) % k;
        len++;
    }
    return len;
};
