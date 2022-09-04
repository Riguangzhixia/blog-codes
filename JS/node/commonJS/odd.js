let even = require('./even.js');

console.log(even + 'odd')
module.exports = function odd(n){
    console.log(even)
    return n != 0 && even(n-1);
}
console.log("odd执行完成")