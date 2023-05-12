/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let diffs = [];
    let diffsBehind = [];
    let char = new Map();
    // 0-i
    nums.forEach(num => {
        char.set(num, char.has(num) ? char.get(num)+1 : 1);
        diffs.push(char.size);
    })
    // i+1-n-1
    nums.forEach(num => {
        char.get(num) > 1 ? char.set(num, char.get(num) - 1) : char.delete(num);
        diffsBehind.push(char.size);
    })
    let ans = [];
    diffs.forEach((diff, index) => {
        ans.push(diff - diffsBehind[index]);
    })
    return ans;
};
console.log(distinctDifferenceArray([3,2,3,4,2]));
``