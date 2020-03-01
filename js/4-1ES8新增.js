// promise在做异步处理的时候流程是:首先要在你的函数内部实例化一个promise对象，最后调用的时候我们通过函数调用一个promise实例，通过这个实例我们调用.then方法
// Async\Await。async的作用就是不需要手动返回一个promise，只需要funciton前面加async
// async function firstAsync () { // 加async关键字就会返回一个promise对象
//   return 27// 传递27非promise对象等，会帮你转化成promise.reslove
// }
// firstAsync().then(val => { // firstAsync()返回值是一个promise对象，所以ta就拥有then方法
//   console.log(val)
// })
// console.log(firstAsync() instanceof Promise)// 判断是不是promise实例

// async function firstAsync () {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve('now it is done')
//     }, 1000)
//   })
//   console.log(await promise)// await是一个表达式
//   console.log(await 40)// await后面不是promise对象，他会帮你自动处理成promise
//   console.log(2)
//   return Promise.resolve(3)
// }
// firstAsync().then(val => {
//   console.log(val)
// })

// es8中增加了对object快速遍历的方法: Object keys.values.entries
// let grade = {
//   'lilei': 96,
//   'hanmeimei': 99
// }

// // let result = []
// // for (let k in grade) {
// //   if (k === 'lilei') {
// //     result.push(k)
// //   }
// // }
// //
// // console.log(result)
// //
// // console.log(Object.keys(grade).filter(item => item === 'lilei'))
// // console.log(Object.values(grade).filter(item => item > 96))
// // let result = []
// for (let [k, v] of Object.entries(grade)) {
//   console.log(k, v)
// }
// console.log(result)

// es8中增加对string补白的方式
// for (let i = 1; i < 32; i++) {
//   if (i < 10) {
//     console.log(`0${i}`)// 字符串模板里面加的0就是补白
//   } else {
//     console.log(i)
//   }
// }
// 补白实用的api，padstart补前面，padend补后面
// for (let i = 1; i < 30020; i += 1000) {
//   console.log(i.toString().padEnd(5, '*#'))// 左边是变成几位数的意思，右边是补什么值。padstart表示我这个字符串输出要保证几位
// }

// es8如何获取object数据的描述符?
// const data = {
//   PortLand: '78/50',
//   Dublin: '88/52',
//   Lima: '58/40'
// }
// Object.defineProperty(data, 'Lima', {// 这个地方就是描述符
//   enumerable: false // enumerable为false是不能枚举的意思
// })
// console.log(Object.keys(data))
// // getOwnPropertyDescriptors可以拿到名单所有的描述符
// console.log(Object.getOwnPropertyDescriptors(data))
// // getOwnPropertyDescriptor可以拿到某一项的描述符，第二项参数要写出对哪项数据关心
// console.log(Object.getOwnPropertyDescriptor(data, 'Lima'))
// // 它是只读的，所以赋值是失效的，不可以任何修改
// data.Lima = '59/50'
