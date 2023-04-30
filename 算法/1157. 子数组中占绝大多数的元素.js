/**
 * @param {number[]} arr
 * @param target
 */
const searchStart = (arr, target) => {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

const searchEnd = (arr, target) => {
    let low = 0, high = arr.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

var MajorityChecker = function (arr) {
    this.arr = arr;
    this.tmp = new Map();
    this.initialized = false;
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function (left, right, threshold) {
    let {arr, tmp, initialized} = this;
    let ans = -1;
    if (!initialized) {
        arr.forEach((item, index) => {
            if (tmp.has(item)) {
                tmp.get(item).push(index);
            } else {
                tmp.set(item, [index]);
            }
        })
        this.initialized = true;
    }
    for (const [item, indexes] of tmp.entries()) {
        // 由于index数组是部分有序的，因此可以通过二分查找将o(n)的复杂度变为o(logn)
        // let limitIndexes = indexes.filter(index => {
        //     return left <= index && index <= right;
        // })
        let leftIndex = searchStart(indexes, left);
        let rightIndex = searchEnd(indexes, right);
        // console.log(indexes, item, left, right, leftIndex, rightIndex);
        let limitIndexes = rightIndex - leftIndex;
        if (limitIndexes >= threshold) {
            ans = item;
            break;
        } else if (limitIndexes >= (right - left + 1) / 2) {
            // 如果某一数的出现次数达到区间一半但没达到阈值，那么区间其他数出现次数也不可能超过阈值了
            return ans;
        }
    }
    return ans;
};

let newMajor = new MajorityChecker([1, 1, 2, 2, 1, 1]);
let a = [newMajor.query(0, 5, 4),
    newMajor.query(0, 3, 3),
    newMajor.query(2, 3, 2)]

console.log(a)
/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
let diff = (arr1, arr2) => {
    let diff = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diff.push({
                index: i,
                a: arr1[i],
                b: arr2[i]
            })
        }
    }
    return diff;
}