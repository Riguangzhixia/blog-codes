function Person (name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name)
    }
}

function Child() {}

let personB = new Person("Banana")

Child.prototype = personB;

let child = new Child()

child.sayName()

let person = new Person("Apple")

person.sayName()

console.log(child.__proto__ === Child.prototype) // 实例的__proto__指向原型对象，prototype一样
console.log(Child.prototype === personB) // 指向原型对象，
console.log(Child.prototype.constructor === Person) // constructor指向原型对象new Person("Banana")对应的构造函数也就是Person

console.log(child instanceof Person)
console.log(child instanceof Object)  // instanceof检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

console.log(Person.prototype.isPrototypeOf(child)) // isPrototypeOf检测一个对象是否存在于另一个对象的原型链
console.log(Person.prototype.isPrototypeOf(personB))
