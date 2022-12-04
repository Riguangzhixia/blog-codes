// 输入n，1<=a,b<=n输出最大的最小公倍数lcm(a,b)-最大公约数gcd(a,b)
// 2=<n<=10^9

let gcd = (a,b) => {
    if(a % b === 0) { return b }
    return gcd(b, a%b);
}

function getBiggestNum (a) {
    // Write your code here
    let gcdVal = gcd(a, a-1);
/*
因为n*n-1最大10^19大于JS中精确表示得最大整数位2^53
(JS采用双浮点数表示整数和小数，64位：1位符号，11位指数，52位尾数)
所以计算时需要通过BigInt封装
*/
    console.log((BigInt(a) * BigInt(a - 1) / BigInt(gcdVal) - BigInt(gcdVal)).toString());
}

getBiggestNum(5)