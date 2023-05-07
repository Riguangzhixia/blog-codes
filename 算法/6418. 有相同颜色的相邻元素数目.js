/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
    let nums = Array.from({ length: n }).fill(0);
    let ans = [];
    queries.forEach((query) => {
        let [index, color] = query;
        let curAns = ans.length ? ans[ans.length - 1] : 0;
        let preColor = nums[index];
        nums[index] = color;
        if (index > 0) {
            if (nums[index - 1] === color) {
                if (nums[index - 1] !== preColor) {
                    curAns++;
                }
            } else {
                if (nums[index - 1] === preColor && preColor !== 0) {
                    curAns--;
                }
            }
        }
        if (index < nums.length - 1) {
            if (nums[index] === nums[index + 1]) {
                if (nums[index + 1] !== preColor) {
                    curAns++;
                }
            } else {
                if (nums[index + 1] === preColor && preColor !== 0) {
                    curAns--;
                }
            }
        }
        ans.push(curAns);
    })
    return ans;
};
console.log(colorTheArray(4, [[0, 2], [1, 2], [3, 1], [1, 1], [2, 1]]));
console.log(colorTheArray(1, [[0, 1]]));