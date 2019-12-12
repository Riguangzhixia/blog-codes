//输入[1,[2,[3,4]]]，输出[1,2,3,4]
function flat(arr){
    //1. tostring/join
    console.log(arr.toString().split(',').map(item => Number(item)));
    //2. reduce/扩展运算符
    console.log(
        arr.reduce((total,item) => {
            let result = item;
            if(Array.isArray(result)){
                while (result.some(child => Array.isArray(child))) {
                    result = [].concat(...result);
                }
            }
            return total.concat(result);
        },[])
    )
}
flat([1,[2,[3,4]]]);
