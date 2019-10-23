const arr = [6,2,4,7,5,3,1];
function count(ar) {
    var indexar = Array.from({length:ar.length},(v,i)=>{return i;});
    var index = 0;
    var result = new Array(ar.length).fill(0);
    var i =0;
    ar.reverse();
    while(indexar.length){
        let indexin = indexar.splice(index,1);
        index = (index + 2 - 1)%(indexar.length);
        result.splice(indexin,1,ar[i]);
        i++;
    }
    return result;
}
console.log(count(arr));
//输入4，2，3，1
//输出1，2，3，4