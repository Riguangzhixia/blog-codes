
//面试题：命名函数表达式sum(100,200)(300)();得到600a
function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}
var result =[1,2,3,4,5].map(factorial)
console.log(result);
//匿名函数如何递归-callee
var callee = [1,2,3,4,5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
console.log(callee)
//多重函数
var add1 = function(x){
    return function (y)
    {
        return x+y
    }
}
console.log(add1(2)(4))
//arguments类数组
function test(a,b,c){
    var x = arguments.length;
    arguments[0] = 10;
    console.log(a);//实参变为10
    console.log(x);//输入实参的个数
    arguments[2] = 100;
    console.log(c);//undefined
    console.log(arguments.callee === test);//.callee当前正在执行的函数，可以用来递归调用匿名函数。
}
test(1,2);
//函数调用apply/call/bind方法

//函数柯里化多重参数传入
function add () {
    //将argument转换成数组
    var args = Array.prototype.slice.call(arguments);
    var fn = function () {
        //拼接多次调用的参数为数组
        var arg_fn = Array.prototype.slice.call(arguments);
        //递归调用add
        return add.apply(null, args.concat(arg_fn));
    }
    //最后一次返回fn时，自动调用valueOf
    fn.valueOf = function () {
        return args.reduce(function(a, b) {
            return a + b;
        })
    }
    return fn;
}
// 输出结果，可自由组合的参数
console.log(add(1)(5)(1)+0);  // 6

function sum(){
    var num = arguments[0];
    if(arguments.length==1){
        return function(sec){
            return num+sec;
        }
    }else{
        var num = 0;
        for(var i = 0;i<arguments.length;i++){
            num = num + arguments[i];
        }
    return num;
    }
}
console.log(sum(3)(2)+0);

function plus(){
    var _args = Array.prototype.slice.call(arguments);
        var _adder = function adder() { 
            Array.prototype.push.apply(_args,[].slice.call(arguments));
            return _adder;
        };

        _adder.valueOf = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            })
        }
        return _adder;
}

console.log(plus(9)(9)(6)+0);

//面试题：实现sunm(100,200)(300)()得到600a
var currying = function (fn) {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        Array.prototype.push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
};

var multi=function () {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
        total += c;
    }
    total += 'a';
    return total;
};

var sum = currying(multi);  

console.log(sum(100,200)(300)());  

