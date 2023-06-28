/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

let tenToNegBinary = () => {

}

//0 1 -1 2
var addNegabinary = function(arr1, arr2) {
    let i = arr1.length - 1, j = arr2.length - 1;
    let carry = 0;
    const ans = [];
    while (i >= 0 || j >= 0 || carry !== 0) {
        let x = carry;
        if (i >= 0) {
            x += arr1[i];
        }
        if (j >= 0) {
            x += arr2[j];
        }
        if (x >= 2) {
            ans.unshift(x - 2);
            carry = -1;
        } else if (x >= 0) {
            ans.unshift(x);
            carry = 0;
        } else {
            ans.unshift(1);
            carry = 1;
        }
        --i;
        --j;
    }
    let k = 0;
    while (ans[k] === 0 && ans.length > 1) {
        ans.splice(k, 1);
        i++;
    }
    return ans;
};
let arr1 = [1], arr2 = [1,1];
console.log(addNegabinary(arr1, arr2));