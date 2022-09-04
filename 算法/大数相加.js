function solve( s ,  t ) {
    // write code here
    let sLen = s.length;
    let tLen = t.length;
    let add = 0;
    let result = "";
    for(let i = sLen - 1,j = tLen - 1;i >= 0 || j >= 0; i--,j--){
        let a = i >= 0 ? s[i] - 0 : 0;
        let b = j >= 0 ? t[j] - 0 : 0;
        let temp = a + b + add
        add = temp >= 10 ? 1 : 0;
        result = (temp % 10).toString() + result;
    }
    if (add > 0) {
        result = add + result;
    }
    return result;
}
console.log(solve('1','99'))