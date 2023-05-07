/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
// 方法1： 单调栈出栈，遇到k时向前遍历删除一组蛙鸣并使同时蛙鸣数量-1，遇到c时数量+1，取同时蛙鸣数量最大即可，如果最后栈里有剩余或者向前遍历的变量没有充值为0则返回-1，时间复杂度o(n2)
var minNumberOfFrogs = function (croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) {
        return -1;
    }
    let kaorc = 'croak'.split('').reverse();
    let stack = [];
    // 向前遍历的索引
    let croakIndex = 0;
    let minNums = 0;
    let nums = 0;
    croakOfFrogs.split('').forEach(element => {
        if (element === 'c') {
            nums++;
        }
        if (kaorc[croakIndex] === element) {
            croakIndex++;
            let i = stack.length - 1;
            while (i >= 0 && croakIndex !== 0) {
                if (stack[i] === kaorc[croakIndex]) {
                    stack.splice(i, 1);
                    croakIndex++;
                }
                if (croakIndex > 4) {
                    croakIndex = 0;
                }
                i--;
            }
            nums--;
        } else {
            stack.push(element);
        }
        minNums = Math.max(minNums, nums);
    });
    if (stack.length !== 0 || croakIndex !== 0) {
        return -1;
    }
    return minNums;
}
// 方法2： 统计字母数量，遇到k时向蛙鸣数量-1，遇到c时蛙鸣数量+1，c字符数+1，其他字符时该字符数量+1，前一字母数量-1，这样就能保证一次正确顺序的蛙鸣，取同时蛙鸣数量最大，时间复杂度o(n)，
// 当最后nums没有清空或者前一个的蛙鸣数量没有的时候即为输入无效
var minNumberOfFrogs2 = function(croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) {
        return -1;
    }
    let minNums = 0, nums = 0;
    const cnt = Array.from({length: 4}).fill(0);
    const croak = 'croak'.split('').map((item,index) => {
        return [item, index];
    });
    const map = new Map(croak);
    for (let i = 0; i < croakOfFrogs.length; i++) {
        const c = croakOfFrogs[i];
        const t = map.get(c);
        if (t === 0) {
            cnt[t]++;
            nums++;
            minNums = Math.max(minNums, nums);
        } else {
            if (cnt[t - 1] === 0) {
                return -1;
            }
            cnt[t - 1]--;
            if (t === 4) {
                nums--;
            } else {
                cnt[t]++;
            }
        }
    }
    if (nums > 0) {
        return -1;
    }
    return minNums;
};

// 方法2.1：方法2判断修改有效蛙鸣方法改为在统计字符时不减少前一字符数量，而是判断count[prevc] >= count[c] >= count[nextc]
var minNumberOfFrogs2_1 = function(croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) {
        return -1;
    }
    let minNums = 0, nums = 0;
    const cnt = Array.from({length: 4}).fill(0);
    const croak = 'croak'.split('').map((item,index) => {
        return [item, index];
    });
    const map = new Map(croak);
    for (let i = 0; i < croakOfFrogs.length; i++) {
        const c = croakOfFrogs[i];
        const t = map.get(c);
        if (t === 0) {
            cnt[t]++;
            nums++;
            minNums = Math.max(minNums, nums);
        } else {
            if (t === 4) {
                nums--;
            } else {
                if (cnt[t - 1] <= cnt[t]) {
                    return -1;
                }
            }
            cnt[t]++;
        }
    }
    if (nums > 0) {
        return -1;
    }
    return minNums;
};
console.log(minNumberOfFrogs2_1('crcoakroak'));
console.log(minNumberOfFrogs2_1('croakcroak'));
console.log(minNumberOfFrogs2_1('croakcrook'));
console.log(minNumberOfFrogs2_1('"croakroak"'));