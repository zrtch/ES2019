// ------------proxy
// es6强大的代理功能该怎么使用？
// 代理的含义： name是我的隐私，price是我租房的价格，但是我的真实价格不希望被用户读取到，我这个信息只传到中介那，中介就不能往外透露
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// let d = new Proxy(o, {
//   get (target, key) { // target就是我们代理的真实对象的信息，key就是对应对象的name,price
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })// proxy左边这个参数是要代理谁；右边是代理之后我能干什么
// console.log(d.price, d.name)

// 从后端读了一个数据，已经进行排序了，我怎么能还原回去
// 从服务端拿到数据之后，要把它变成只读的，这样的话留一份存底，保证这个数据永远没有被修改过，可以拷贝做各种操作
// 代理第二种作用：你从我这过，我告诉你真实的信息，但是你不能修改我的信息
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key]
//   },
//   set (target, key, value) { // target是我被代理的那个对象，key就是对应对象的name，value就是要赋什么值给它， set对应的是写操作的过程
//     return false
//   }
// })
// d.price = 200// 赋值并没起作用，就是因为拦截了这个赋值操作，利用这个场景，就可以保证o不会被修改，因为把o保护起来，不会把o暴露出去，暴露的是中介d，让用户访问的永远是中介d
// console.log(d.price, d.name)

// es5做法
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {// 用es5的这个方法不仅用户改不了，连自己都改不了，o直接锁死了
//     writable: false
//   })
// }
// o.price = 200
// console.log(o.name, o.price)

// 校验的处理。
// 1，这个信息有效的数据就两项，不能破坏我的数据结构。2，只能修改我的价格，不能超于300，拦截无效的数据
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// //
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         return false
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }

// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })
// d.price = 390// 对无效的操作的进行一种过滤
// d.name = 'like'// 对你的赋值进行校验，满足的我让你改
// d.age = 23
// console.log(d.price, d.name, d.age)

// -------------错误中断他的违法操作，并且能上报
// window.addEventListener监听错误
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   //   report('./') //不关心你有多少个检验，哪一天想去掉直接注释
// }, true)

// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// // 校验规则
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         // 不满足规则就要会促发错误
//         throw new TypeError('price exceed 300')
//         // return false
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }

// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })
// d.price = 390// 对无效的操作的进行一种过滤
// d.name = 'like'// 对你的赋值进行校验，满足的我让你改
// d.age = 23
// console.log(d.price, d.name, d.age)

// 生成十个实例对象，随机的不相同的，有了这个id就不能修改，我只能读
// class Component {
//   constructor () {
//     this.proxy = new Proxy({// 用proxy每次生成都是随机的，而且不同的实例对象他是唯一的，他是只读的
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id () {
//     return this.proxy.id
//   }
// }
// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)

// -----------------代理的销毁的动作(如何撤销你的代理)
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// // 想撤销一个代理操作，就不能用new proxy,要用proxy.revocable
// let d = Proxy.revocable(o, {
//   get (target, key) { // target就是我们代理的真实对象的信息，key就是对应对象的name,price
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
// console.log(d.proxy.price, d)
// // 读完之后在某个时间点给你销毁了，你就读不了
// setTimeout(function () {
//   d.revoke()
//   setTimeout(function () {
//     console.log(d.proxy.price)
//   }, 100)
// }, 1000)
