// function的更新
// es5如何处理参数的默认值问题?
// function f (x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 42
//   }
//   return x + y + z
// }//es5这样做的缺点就是很麻烦，函数体内部要对每个缺醒值进行处理；修改这些也不容易，这些代码也很冗余
// console.log(f(1, 8, 43))
// es6如何处理参数的默认值问题?
// function f (x, y = 7, z = x + y) { // 运算表达式也可以额作为默认参数的表达式；没有默认值参数往前写，没有默认值的往后写；写参数的时候就同时指定了默认值
//   console.log(f.length)// f.length获取的是定义的时候没有默认值的参数
//   return x * 10 + z
// }
// console.log(f(1, undefined))// y传undefined就是默认值的参数

// ----------怎么处理不确定参数？
// function sum () {
//   let num = 0
//   //   Array.prototype.forEach.call(arguments, function (item) {//arguments是伪数组，利用原型链进行遍历
//   //     num += item * 1
//   //   })
//   Array.from(arguments).forEach(function (item) {
//     num += item * 1
//   })
//   return num
// }
// console.log(sum(1, 2, 3, 4))

// es6如何处理不确定参数？
// function sum (base, ...nums) { // ...是rest的意思，告诉你所有的参数都放在nums变量中
//   // ...(rest)是用来获取所有参数的
//   let num = 0
//   nums.forEach(function (item) {
//     num += item * 1
//   })
//   return base * 2 + num
// }
// console.log(sum(1, 2, 3))

// es5参数的逆运算
// function sum (x = 1, y = 2, z = 3) {
//   return x + y + z
// }
// let data = [4, 5, 6]
// // console.log(sum(data[0], data[1], data[2]))
// // console.log(sum.apply(this, data))// aplly允许把函数的参数收揽到一个数组中，从零开始对应
// console.log(sum(...data)) // data是一个数组，利用...就把数据的内容打散回去到xyz

// ------------箭头函数-→ (这里面放的是参数)=>{这个是函数体}
// function hello(){};  let hello = funciton(){} //es5声明函数的两种方式
// let hello = (name, city) => { // 只有一个参数的时候是可以省略小括号的
//   // 如果返回是对象，用小括号；其他值必须花括号
//   console.log('hello world', name, city)
// }
// hello('imooc', 'beijing')
// let sum = (x, y, z) => x + y + z// 如果你的函数返回是一个表达式，花括号可以省掉；箭头后面是表达式，表达式的值就作为函数的返回值
// console.log(sum(1, 2, 3))

// let sum = (x, y, z) => ({// 这里的小括号是运算表达式的作用，花括号是object对象的花括号
//   x: x,
//   y: y,
//   z: z
// })
// console.log(sum(1, 2, 3))

// let test = {
//   name: 'test',
//   say: function () {
//     console.log(this.name)// 当你不清楚this指向的时候，一定要看是谁在调用这个function，那个this就指向了谁
//   }
// }
// test.say()// 在这里，say是被test调用的，所以this指向了test, this.name不就是test的name

// let test = {
//   name: 'test',
//   say: () => { // 箭头函数的this是指我在写这个代码的时候this的指向，而不是执行
//     console.log(this.name, this)
//   }
// }
// test.say()
