// 基本类型的临时包装
let str = 'test';
console.log(str instanceof String) // false
console.log(String.prototype.isPrototypeOf(str)) // false
console.log(str.__proto__ === String.prototype) // true

let str2 = new String("str2")
console.log(str2 instanceof String) // true
console.log(String.prototype.isPrototypeOf(str2)) // true
console.log(str2.__proto__ === String.prototype) // true

// parseInt参数问题
let arr = Array.apply(null, {length: 10}).map((item, index) => index);
arr = arr.map(parseInt)
console.log(arr);