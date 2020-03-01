// -------------promise
// es5中的回调地狱了解吗？回调地狱：a回调b，b回调c，c回调d，层层嵌套
// 异步加载js
// function loadScript (src, callback) {
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => { callback() }// 自定义加载有个onload事件，要监听这个事件，函数里面执行callback
//   script.onload = (err) => { callback(err) }
//   document.head.append(script)
//   // 异步操作不会立马执行。放到异步执行队列里
// }
// function test (name) {
//   console.log(name)// 这里是同步操作，优先同步操作，然后再执行异步操作
// }
// // 回调地狱：回调的层数越深，后期的维护的成本是更高的
// loadScript('./1.js', function (script) {
//   if (script.message) {
//     // 监控上报逻辑
//     loadScript('./2.js', function (script) {
//       console.log(script)
//     })
//   } else {
//     console.log(script)
//     loadScript('./2.js', function (script) {
//       console.log(script)
//       loadScript('./3.js', function (script) {
//         console.log(script)
//       })
//     })
//   }
// })

// es6 promise：调用resolve把它的状态从pendding改成fullfiled,那么这个状态不可能变成reject，不可逆，resolve和reject只能有一个被执行
// function loadScript (src) {
//   // new promise返回一个状态，这个状态叫pendinng，挂起的意思，执行promis要关心两个值，一个是state状态，一个是result结果
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)// // 当我成功加载之后我调用resolve,会把promise状态改成fullfiled
//     script.onerror = (err) => reject(err)// 它的状态就变成rejected,error
//     document.head.append(script)
//   })
// }

// // then方法：.then是promise对象原型的方法。then支持两个参数，这两个参数都是函数类型
// // .then语法：promise.then(onFulfilrd,onRejected )这两个参数第一个是必选的，第二个是可选的，分别对应的resolve和reject这两个方法，如果传递时非函数，会返回一个空的promise对象
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./2.js')
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// resolve，reject
// function test (bool) {
//   if (bool) {
//     return new Promise((resolve, reject) => {
//       resolve(30)
//     })
//   } else {
//     return Promise.reject(new Error('sss'))
//   }
// }
// test(0).then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// promise对异常的处理,利用catch方法可以捕获多个then错误的办法的集合
// function loadScript (src) {
//   // new promise返回一个状态，这个状态叫pendinng，挂起的意思，执行promis要关心两个值，一个是state状态，一个是result结果
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => resolve(src)// // 当我成功加载之后我调用resolve,会把promise状态改成fullfiled
//     script.onerror = (err) => reject(err)// 它的状态就变成rejected,error
//     document.head.append(script)
//   })
// }
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./2.js')
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   })
//   .catch(err => { // catch是promise的实例方法，用catch捕获错误的时候，要用reject的方式抛出异常，不要用throw new error的方法
//     console.log(err)
//   })

// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then((value) => { // 利用promise.all去完成不同的并行接口的实现
//   console.log(value)
// })

// promise.race：你传进来的promise对象集合中，有一个是完成状态，他就把那个值拿过来放在then中代表完成，就是先到先得
// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(1)
//     }, 1000)
//   })
// }
// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(2)
//     }, 3000)
//   })
// }
// Promise.race([p1(), p2()]).then((value) => {
//   console.log(value)
// })
