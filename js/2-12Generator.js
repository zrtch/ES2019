// -------------Generator
// es6如何让遍历'停'下来。Generator是函数：/-
// function loop () { //es5写法 一旦这个函数被执行，里面的循环就不受控了
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()

// Generator也是函数：function后面加个*号；函数内部可以使用yield来暂停函数的执行；调用的时候，要通过调用next恢复程序的执行
// function * loop () { // function后面加个*号
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)// 函数内部可以使用yield来暂停函数的执行
//   }
// }
// const l = loop()
// l.next()// 调用的时候，要通过调用next恢复程序的执行，不调用next，循环就是暂停状态。执行了一次就暂停，可以精细化的控制遍历的每一个节奏
// l.next()
// l.next()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }
// const l = gen()// 这个generator函数返回的这个对象，这个对象有个对象next,这个next就是向下执行的过程
// l.next()
// l.next()

// 语法总结：第一，generator是一个函数，在定义的时候，这个函数比普通函数多一个*号
// 第二，在generator函数内部，不是普通的函数，想让程序停下来，必须加关键词yield，没有它，他就不会停下来
// 第三，generator函数是可以嵌套的，嵌套的话，后面加一个*号
// 第四，每次恢复执行的时候用next，同时next会返回当前执行的状态和数据，value是返回当前执行的结果，done告诉你是不是结束
// function * gen () {
//   let val
//   val = yield * [1, 2, 3]// yield加*号表示后面是一个遍历的对象，也可以是generator函数
//   console.log(val)
// }
// const l = gen()// 这个generator函数返回的这个对象，这个对象有个对象next,这个next就是向下执行的过程
// console.log(l)
// console.log(l.next())// 恢复执行的时候是用next恢复执行
// console.log(l.next())

// generator如何传参。通过next来改变你内部程序运行的结果
// function * gen () {
//   let val
//   val = yield [1, 2, 3]
//   console.log(val)
// }
// const l = gen()
// console.log(l.next(10))// next执行的要找yield这个表达式，然后找后面这个数组执行，这个时候没涉及到赋值的操作，所以这个10没用上，下一步的执行，对这个yeild求值做赋值的操作，
// console.log(l.next(20))// 这个next传的是20,用20来代替yield后面的表达式

// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// // 遇到一个错误，不满足情况，要抛出异常
// g.throw(new Error('s'))
// console.log(g.next())

// es5如何做年会抽奖
// function draw (first = 1, second = 3, third = 5) {
//   let firstPrize = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G']
//   let thridPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', 'H', 'I']
//   let result = []
//   let random
//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrize.lenght)
//     result = result.concat(firstPrize.splice(random, 1))
//   }
//   // 抽二等奖
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrize.length)
//     result = result.concat(secondPrize.splice(random, 1))
//   }
//   // 抽三等奖
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * firstPrize.length)
//     result = result.concat(thridPrize.slice(random), 1)
//   }
//   return result
// }
// let t = draw()
// for (let value of t) {
//   console.log(value)
// }

// generator应用场景：es6做年会抽奖
// function * draw (first = 1, second = 3, third = 5) { // 首先加*号，让他变成generator
//   let firstPrize = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G']
//   let thridPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', 'H', 'I']
//   //   let result = []去掉result
//   let count = 0
//   let random
//   while (1) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrize.length)
//       yield firstPrize[random]
//       count++
//       firstPrize.slice(random, 1)
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrize.length)
//       yield secondPrize[random]
//       count++
//       secondPrize.slice(random, 1)
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thridPrize.length)
//       yield thridPrize[random]
//       count++
//       thridPrize.slice(random, 1)
//     } else {
//       return false
//     }
//   }
// }
// let t = draw()
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)
// console.log(t.next().value)

// 无限循环的流程，只要数就能取到值,只要你调用，就能一直输出
// function * count (x = 1) {
//   while (1) {
//     if (x % 3 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let num = count()
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
