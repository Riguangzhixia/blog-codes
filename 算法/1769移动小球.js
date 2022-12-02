// 第一次理解错，以为初始状态盒子里得小球数不一定为1
let multiMinOperations = function(boxes) {
    let validIndexes = [];
    let boxesArr = boxes.split("");
    boxesArr.forEach((number ,index) => {
        if(parseInt(number) > 0) {
            validIndexes.push(index);
        }
    })
    return boxesArr.map((number, index) => {
        let opr = 0;
        validIndexes.forEach(validIndex => {
            opr += (Math.abs(validIndex - index)) * boxesArr[validIndex]
        })
        return opr;
    });
};
/**
 * @param {string} boxes
 * @return {number[]}
 */
let minOperations = function(boxes) {
    let validIndexes = 0;
    let diffIndexes = 0;
    let boxesArr = boxes.split("");
    let operations = 0;
    boxesArr.forEach((number ,index) => {
        if(parseInt(number) > 0) {
            validIndexes++;
            operations += index;
        }
    })

    return boxesArr.map((number) => {
        let tmp = operations;
        if(number !== '0') {
            diffIndexes++;
            validIndexes--;
        }
        operations  += diffIndexes - validIndexes;
        return tmp;
    });
};

console.log(minOperations("001011"))
console.log(multiMinOperations("001011"))