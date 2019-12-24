//输入[1,[2,[3,4]]]，输出[1,2,3,4]
const testarr = [1, [2, [3, 4]]];

function flat(arr) {
    //1. reduce/扩展运算符
    console.log(
        arr.reduce((total, item) => {
            let result = item;
            if (Array.isArray(result)) {
                while (result.some(child => Array.isArray(child))) {
                    result = [].concat(...result);
                }
            }
            return total.concat(result);
        }, [])
    )
}

flat(testarr);
//2. tostring/join
function flat2(arr) {
    console.log(arr.toString().split(',').map(item => Number(item)));
}

flat2(testarr);
//3. 扩展运算符
function flattern(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    console.log(arr);
}

flattern(testarr);