// ---------------object upadate
// object属性能简写吗？ es5中不允许object增加异步函数；es6是允许的，变成异步的，前面加*号
// let x = 1
// let y = 2
// let z = 3
// let obj = {
//   'x': x,
//   y,
//   [z + y]: 6, // es6写法
//   hello () {
//     console.log('hello')
//   }
// }
// // obj[z] = 5//es5写法
// obj.hello()

// ---------es6存储数据：set(所存储的数据必须是唯一的，不允许重复)
// let s = new Set([1, 2, 3, 4])// set所接受的参数是可遍历的对象
// let s = new Set()
// s.add('hello').add('goodbye').add('hello')// 存入重复的数据会自动过滤
// // s.delete('hello')//删除指定项
// // s.clear()// 删除全部

// console.log(s.has('hello'), s.size)// 通过has方法快速查找有没有数值在里面;判断size属性，目前size存入的条数

// // console.log(s.keys())
// // console.log(s.values())
// // console.log(s.entries())// 返回键值对
// // 读可以用fereach,forof
// s.forEach(item => {
//   console.log(item)
// })
// for (let item of s) {
//   console.log(item)
// }

// ----------es6中的map是什么，解决什么问题，怎么用？
// // let map = new Map([[1, 2], [3, 4]])// Map对它里面可遍历的对象是有限制的;key可以是任意值
// let map = new Map()

// map.set(1, 2)
// map.set(3, 'value-4')
// map.set(1, 'value-3')// set既有添加数据的能力，也有修改数据的能力
// map.delete(1)// map的删除索引值的方法
// map.clear()// 删除全部
// console.log(map.size)//查找数量
// console.log(map.has(2))// 查的不是value值，是索引值
// console.log(map.get(1))
// console.log(map.keys(), map.values(), map.entries())
// map.forEach((value, key) => {
//   console.log(value, key)
// })
// for (let [key, value] of map) { // 遍历的时候一定要写[key, value],用中括号包起来
//   console.log(key, value)
// }
// // 键的类型是任意的，map的key值可以是任意类值
// let o = function () {
//   console.log('o')
// }
// map.set(o, 4)
// console.log(map.get(o))

// ----------es6中怎么把一个对象复制到另一个对象上？assign(它是浅复制)，不是引用类型的值，给你做数据替换
// const target = {
//   a: {
//     b: {
//       c: {
//         d: 1
//       }
//     },
//     e: 5,
//     f: 6,
//     h: 10
//   }
// }
// const source = {
//   a: {
//     b: {
//       c: {
//         d: 1
//       }
//     },
//     e: 2,
//     f: 3
//   }
// }
// Object.assign(target, source)// source到target这个浅复制的过程中，会出现数据丢失的情况
// console.log(target)
