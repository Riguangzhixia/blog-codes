/**
 * @param {number[]} nums
 * @return {number}
 */

// 枚举法：超时

var maxValueAfterReverse = function (nums) {
    let maxChangedNum = 0;
    let maxNum = nums.reduce((total, num, index) => {
        return index === nums.length - 1 ? total : total + Math.abs(num - nums[index + 1]);
    }, 0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            let leftChangedNum, rightChangedNum;
            if (i === 0) {
                leftChangedNum = 0;
            } else {
                leftChangedNum = Math.abs(nums[j] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1]);
            }
            if (j === nums.length - 1) {
                rightChangedNum = 0;
            } else {
                rightChangedNum = Math.abs(nums[i] - nums[j + 1]) - Math.abs(nums[j] - nums[j + 1]);
            }
            let changedNum = leftChangedNum + rightChangedNum;
            maxChangedNum = Math.max(changedNum, maxChangedNum);
        }
    }
    return maxNum + maxChangedNum;
};

let nums = [2, 4, 9, 24, 2, 1, 10]; // 10

console.log(maxValueAfterReverse(nums));

// 分析差值何时最大，changedNum = Math.abs(r - l(-1)]) - Math.abs(l - l(-1)) + Math.abs(l - r(+1)) - Math.abs(r - r(+1))，
// 要changedNum大于0，要abs(r - l(-1)) + abs(l - r(+1)) > abs(l - l(-1)) + abs(r - r(+1))

var maxValueAfterReverse = function(nums) {
    let n = nums.length;
    let maxNum = nums.reduce((total, num, index) => {
        return index === nums.length - 1 ? total : total + Math.abs(num - nums[index + 1]);
    }, 0)
    let mx1 = 0;

    // 先统计 i==0 及j==n-1情况
    for (let i = 1; i < n - 1; i++) {
        mx1 = Math.max(mx1, Math.abs(nums[0] - nums[i + 1]) - Math.abs(nums[i] - nums[i + 1]));
        mx1 = Math.max(mx1, Math.abs(nums[n - 1] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1]));
    }

    
    let mx2 = -Infinity, mn2 = Infinity;
    
    for (let i = 0; i < n - 1; i++) {
        let x = nums[i];
        let y = nums[i + 1];
        mx2 = Math.max(mx2, Math.min(x, y));
        mn2 = Math.min(mn2, Math.max(x, y));
    }
    return maxNum + Math.max(mx1, 2 * (mx2 - mn2));
}
