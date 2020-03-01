// // es5如何声明一个类?
// let Animal = function (type) {
//   this.type = type
// }

// Animal.prototype.eat = function () { // 用原型链的方式做继承。把eat挂在了原型链上，不再实例本身
//   console.log('i am eat food')
// }

// let dog = new Animal('DOG')
// let pig = new Animal('pig')
// console.log(dog)
// console.log(pig)

// dog.constructor.prototype.eat = function () { // constructor.prototype修改我们共同的eat方法，大家都跟着变，有多少实例都跟着变
//   console.log('error')
// }
// dog.eat()// 只有dog发生变化，违背了继承的原则
// pig.eat()

// es6如何声明类？class只是es5用原型链声明的语法糖（语法不一样，语法糖本质是一样的）
// class Animal {
//   constructor (type) {
//     this.type = type
//   eat () {DZ
//   }
//     console.log('i am eat food')
//   }
// }
// let dog = new Animal('DOG')
// let pig = new Animal('pig')
// console.log(dog)
// console.log(pig)
// dog.eat()
// pig.eat()
// console.log(typeof (Animal))

// ------------如何读写属性？）Setter&Getter
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   get age () { // getter是实例的属性，不是实例的方法 增加这个属性就是让你控制属性的只读或者是有条件的写入
//     return _age
//   }
//   set age (val) {
//     if (val < 7 && val > 4) { // 只能小于7大于4,其他的年龄写不进去，这就是seter帮你你做的事情
//       _age = val
//     }
//   }
//   eat () {
//     console.log('i am eat food ')
//   }
// }
// let dog = new Animal('DOG')
// console.log(dog.age)
// dog.age = 5
// console.log(dog.age)

// ---------如何操作方法？）类静态方法在实例对象上是找不到的
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()// 用this引用也是undefined,仍然不是一个function
//   console.log('i am eat food')
// }
// Animal.walk = function () {
//   console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()
// // dog.walk()// 静态方法在实例对象上是找不到的

// es6如何操作静态方法？Static Methods：有专门的语法来识别实例对象的方法还是类的静态方法
// 如果说你的方法依赖于对象的某些属性或者方法，我这个方法要引用实例对象的方法。如果涉及不到实例对象内容，就用类的静态方法
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()// 引用方法还是用类的方法来引用
//     console.log('i am eat')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// let dog = new Animal('dog')
// dog.eat()

// --------如何继承一个类？
// es5如何做继承类？
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk()// 用this引用也是undefined,仍然不是一个function
//   console.log('i am eat food')
// }
// Animal.walk = function () {
//   console.log('i am walking')
// }

// let DOG = function () {
//   // 初始化父类Animal的构造函数
//   Animal.call(this, 'dog')
//   this.run = function () {
//     console.log('i can run')
//   }
// }
// // 值类型：引用类型
// DOG.prototype = Animal.prototype
// let dog = new DOG('dog')
// dog.eat()

// es6如何继承类？
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()
//     console.log('i am eat food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// class DOG extends Animal {
//   // 显示，隐式
//   constructor (type) { // 如果显示调用constructor这个构造函数，一定实现super放在第一行
//     super(type)
//     this.age = 2
//   }
// }
// let dog = new DOG('dog')
// dog.eat()
