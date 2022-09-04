let odd = require('./odd.js');

let counter = 0;
module.exports = function even(n){
    counter ++;
    console.log(counter);

    return n === 0 || odd(n-1);
}
console.log('even执行玩成');
