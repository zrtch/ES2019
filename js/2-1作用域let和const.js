/*
    全局作用域
*/
// var abc = 123

// function test () {
//     ab =  45;
// }
// test()
// function test() {
//   var a = 3
//   function test2() {
//     var b = 4
//     return a + b + c
//   }
//   return test2
// }

/*
    函数作用域
*/
// function test () {
//   var a = 3
//   if (a === 3) {
//     var b = 4
//     console.log('abc')
//     console.log('abbbcdd')
//   } else {
//     console.log('abcd')
//   }
//   console.log(b)
//   return a + 3
// }
// console.log(test())
// console.log(a)

/*
  动态作用域
*/
// window.a = 3
// function test () {
//   console.log(this.a)
// }
// test()
// test.bind({ a: 2300 })()

// ----------------------------------

// {
//   let a = 4
//   console.log(a)
// }
// console.log(a)
// 1,let声明的变量是有块级作用域的

// var b = 3
// let c = 4
// console.log(b, c)
// console.log(window.b, window.c)
// //2,let声明的变量不能用全局对象的属性访问

// var b = 4
// console.log(b)
// let c= 5
// console.log(c)
// //3,let声明的变量不允许重复定义
// 4,let声明的变量不会变量提升

// --------------------------------
// const a = 2
// a = 3
// console.log(a)
// const只能定义常量,不能在被修改

// const a =1
// const b
// b=2
// console.log(a)
// //const不允许先声明,后赋值，要在初始化赋值，var和let允许

// 1，请问下面代码的输出是什么？如何根据i的顺序输出？
// for (var index = 0; index < 3; index++) {
//   setTimeout(function () {
//     console.log(index)
//   }, 1000)
// }
// // 输出0,1,2,3。 删除定时器
// for (var index = 0; index < 3; index++) {
//   function test () {
//     console.log(index)
//   }
//   test()
// }
// 2，请问下面的代码会发生什么？
// console.log(a)
// let a = 1
// 会报错，因为let不会变量提升
