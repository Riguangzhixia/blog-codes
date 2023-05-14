/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let nums = 0;
    derived.forEach(code => {
        if(code === 1) {
            nums++;
        }
    })
    let last = derived.at(-1);
    if (last) {
        return !!((nums - 1) % 2)
    } else {
        return !!!(nums % 2);
    }
};
derived = [1,1,1]
console.log(doesValidArrayExist(derived));