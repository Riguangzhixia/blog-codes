/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

// 方法1: 快排按照出现次数依次插入偶数位,然后插入奇数位置
var rearrangeBarcodes = function (barcodes) {
    let codeMap = new Map();
    let time = new Date();
    barcodes.forEach(code => {
        codeMap.set(code, codeMap.has(code) ? codeMap.get(code) + 1 : 1)
    })
    let time1 = new Date();
    console.log("构建map耗时", time1 - time);
    let keys = Array.from(codeMap.entries()).sort(([key, value], [key2, value2]) => value2 - value);
    let time2 = new Date();
    console.log("快排耗时", time2 - time1);
    for (let i = 0; i < barcodes.length; i += 2) {
        let code = keys[0][0];
        let codeNums = keys[0][1];
        barcodes[i] = code;
        if (codeNums === 1) {
            keys.shift();
        } else {
            keys[0][1]--;
        }
    }
    let time3 = new Date();
    console.log("插入偶数位置耗时", time3 - time2);

    for (let i = 1; i < barcodes.length; i += 2) {
        let code = keys[0][0];
        let codeNums = keys[0][1];
        barcodes[i] = code;
        if (codeNums === 1) {
            keys.shift();
        } else {
            keys[0][1]--;
        }
    }
    console.log("插入奇数位置耗时", new Date() - time3);
    return barcodes;
};
console.log(rearrangeBarcodes(new Array(10000000).fill(1).concat(new Array(10000000).fill(2))));
// 方法2: 直接找出出现次数最多的插入到偶数位置,其余的插入奇数位即可
var rearrangeBarcodes = function (barcodes) {
    let codeMap = new Map();
    let maxCode = 0;
    let maxNums = 0;
    let time = new Date();
    barcodes.forEach(code => {
        let nums = codeMap.get(code) || 0;
        codeMap.set(code, nums + 1)
        if (maxNums < nums + 1) {
            maxCode = code;
            maxNums = nums + 1;
        }
    })
    let time1 = new Date();
    codeMap.delete(maxCode);
    let keys = Array.from(codeMap.entries());
    for (let i = 0; i < barcodes.length; i += 2) {
        if (maxNums > 0) {
            barcodes[i] = maxCode;
            maxNums--;
        } else {
            let code = keys[0][0];
            let codeNums = keys[0][1];
            barcodes[i] = code;
            if (codeNums === 1) {
                keys.shift();
            } else {
                keys[0][1]--;
            }
        }
    }
    let time2 = new Date();
    console.log("插入偶数位置耗时", time2 - time1);
    for (let i = 1; i < barcodes.length; i += 2) {
        let code = keys[0][0];
        let codeNums = keys[0][1];
        barcodes[i] = code;
        if (codeNums === 1) {
            keys.shift();
        } else {
            keys[0][1]--;
        }
    }
    console.log("插入奇数位置耗时", new Date() - time2);
    return barcodes;
};
console.log(rearrangeBarcodes(new Array(10000000).fill(1).concat(new Array(10000000).fill(2))));


// 官方解答:只考虑出现次数最大的元素，将其间隔排列后其他元素插空
// var rearrangeBarcodes = function(barcodes) {
//     const length = barcodes.length;
//     if (length < 2) {
//         return barcodes;
//     }

//     const counts = new Map();
//     let maxCount = 0;
//     for (const b of barcodes) {
//         counts.set(b, (counts.get(b) || 0) + 1);
//         maxCount = Math.max(maxCount, counts.get(b));
//     }

//     let evenIndex = 0;
//     let oddIndex = 1;
//     let halfLength = Math.floor(length / 2);
//     const res = _.fill(Array(length), 0);
//     for (let [x, count] of counts.entries()) {
//         while (count > 0 && count <= halfLength && oddIndex < length) {
//             res[oddIndex] = x;
//             count--;
//             oddIndex += 2;
//         }
//         while (count > 0) {
//             res[evenIndex] = x;
//             count--;
//             evenIndex += 2;
//         }
//     }
//     return res;
// };
