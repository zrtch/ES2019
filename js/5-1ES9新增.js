// for await of es9中异步操作集合是如何遍历的呢?
// function Gen (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(time)
//     }, time)
//   })
// }
// 这里for of当作同步任务去处理，所以他解决不了异步操作集合的遍历问题
// async function test () {Z
//   let arr = [Gen(2000), Gen(100), Gen(3000)]// arr里面都是异步操作
//   for (let item of arr) {
//     console.log(Date.now(), await item.then(console.log))
//   }
// }
// test()
// for await of操作异步集合
// async function test () {
//   let arr = [Gen(2000), Gen(100), Gen(3000)]
//   for await (let item of arr) {
//     console.log(Date.now(), item)// 先输出console然后按顺序输出
//   }
// }
// test()

// 自定义数据结构的异步遍历该如何操作
// const obj = {
//   count: 0,
//   Gen (time) {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve({ done: false, value: time })
//       }, time)
//     })
//   },
//   [Symbol.asyncIterator] () {
//     // 里面的逻辑随便怎么写，遵守这个方法返回是一个对象，对象下有一个next方法，而next方法必须返回一个对象是done和value
//     let self = this
//     return {
//       next () {
//         self.count++
//         if (self.count < 4) {
//           return self.Gen(Math.random() * 1000)
//         } else {
//           return Promise.resolve({
//             done: true,
//             value: ''
//           })
//         }
//       }
//     }
//   }
// }
// async function test () {
//   for await (let item of obj) {
//     console.log(Date.now(), item)
//   }
// }
// test()

// es9中promise是如何兜底操作的。兜底意思不管你走resolve和reject都会走到我这里来
// 想把then里面的执行正常的里面，后面还要执行一套什么逻辑，都要放到finall里去做
// const Gen = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (time < 500) {
//         reject(time)
//       } else {
//         resolve(time)
//       }
//     }, time)
//   })
// }
// Gen(Math.random() * 1000)
//   .then(val => console.log('resolve', val))
//   .catch(err => console.log('reject', err))
//   .finally(() => { console.log('finish') })

// es9新增object的res&spread方法有何用武之地
// const input = {
//   a: 1, b: 2
// }
// const test = {
//   d: 5
// }
// const output = {
//   ...input, // ...作用就是把input内容打散到output
//   ...test,
//   c: 3
// }
// console.log(input, output)
// // spread用的是拷贝的形式来做的，不是引用，修改input的值，output不被影响
// input.a = 4
// console.log(input, output)

// 把里面的一个数据打到不同对象下面去
// const input = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5
// }
// // 必选的拿出来，可选的或者不太关心放到rest里面
// const { a, b, ...rest } = input
// console.log(a, b, rest)

// regexp在es9新增dotAll,命名分组捕获，后行断言，能力大幅提升
// console.log(/foo.bar/.test('foo\nbar'))
// console.log(/foo.bar/us.test('foo\nbar'))
// // 想在程序中快速验证正则表达式有没有开启dotAll模式，以下方法即可
// const re = /foo.bar/sugi
// console.log(re.dotAll)
// console.log(re.flags)// 检查上面有没有s

// 命名分组捕获
// const t = '2019-06-06'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
// // console.log(t[1])
// // console.log(t[2])
// // console.log(t[3])
// // 给每个分组捕获加上名字就叫命名的分组捕获
// console.log(t.groups.year)// groups不是undefined，是一个数组
// console.log(t.groups.month)
// console.log(t.groups.day)

// 先行断言，后行断言
// let test = 'hello world'
// console.log(test.match(/hello(?=\sworld)/))// 先遇到的hello,然后在判断后面的world, 这种模式就是先行断言
// console.log(test.match(/(?<=hello\s)world/))// 后行断言
