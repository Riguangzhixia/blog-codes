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