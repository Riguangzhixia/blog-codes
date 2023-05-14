/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let k = -1;
    let set = new Set();
    nums.forEach(num => {
        if (set.has(-num)) {
            k = Math.max(Math.abs(num), k);
        }
        set.add(num);
    })
    return k;
};
let nums = [-1,2,-3,3];

findMaxK([-1,10,6,7,-7,1])