// ---------Module export 导出
// export const name = 'hello'
// export let addr = 'Beijing'
// export var list = [1, 2, 3]

// 另一种做法
// const name = 'hello2'
// let addr = 'Beijing'
// let list = [1, 2, 3]

// // export default这是默认导出，只能导出一个，其它要放到花括号
// export default name// 这种方式导出的是允许自己取名字的
// export {
//   addr,
//   list
// }

// 导出函数
// export default function say (content) {
//   console.log(content)
// }

// export function run () {
//   console.log('i am running')
// }

// const say = (content) => {
//   console.log(content)
// }
// const run = () => {
//   console.log('i am running')
// }
// export {
//   say,
//   run
// }

// 导出对象
// const data = {
//   code: 1,
//   message: 'success'
// }
// const des = {
//   code: 20,
//   message: 'beijing'
// }
// export default {
//   data,
//   des
// }

// 类的导出
// 指定了default后面是可以不加名称的，不想默认导出要给导入加一个花括号，
// export class Test {
//   constructor () {
//     this.id = 2
//   }
// }

// export class Animal {
//   constructor () {
//     this.name = 'dog'
//   }
// }

// export default class People {
//   constructor () {
//     this.id = '123'
//   }
// }

// run这个模块是可以引用say这个模块的
// export function say () {
//   console.log('say')
// }
// export function run () {
//   say()
// }
