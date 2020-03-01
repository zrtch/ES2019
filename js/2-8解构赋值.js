// ------------Destructure(解构赋值)
// es5从一个复杂的数据结构中提取数据是如何做的？
// let arr = ['hello', 'world']
// let firstName = arr[0]
// let surName = arr[1]
// console.log(firstName, surName)
// es6用的是解构赋值：把数据拆解开的数据赋值给一些变量
// let arr = ['hello', 'world']
// let [firstName, surName] = arr// 左边中括号里面是变量的集合，右边是数据
// console.log(firstName, surName)

// 数组的
// let arr = ['a', 'b', 'c', 'd']
// let [firstName,, thirdName] = arr // 如果想略过一项不关心的数据，用逗号略过去
// console.log(firstName, thirdName)

// let arr = 'abcd'
// let [firstName,, thirdName] = arr// 左边的中括号是语法的规定；右边的凡是可遍历的对象都可以
// console.log(firstName, thirdName)

// let [firstName,, thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)

// let user = { name: 's', surname: 't' };// 解构赋值不仅可以赋简单的变量，还可以赋值对象的属性
// [user.name, user.surnamee] = [1, 2]
// console.log(user)

// let user = { name: 's', surname: 't' }
// for (let [k, v] of Object.entries(user)) {
//   // 隐式赋值，显示索引
//   console.log(k, v)
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

// let arr = []
// let [firstName = 'hello', curName, ...last] = arr // 可以用等号做一个默认值
// console.log(firstName, curName, last)// 当你数据不够的时候，一律都是undefined

// -----------object的解构赋值
// let options = {
//   title: 'menu',
//   //   width: 100,
//   height: 200
// }
// let { title: title2, width = 130, height } = options
// console.log(title2, width, height)

// let options = {
//   title: 'menu',
//   width: 100,
//   height: 200
// }
// let { title, ...last } = options// 在某个处理的场景中，只关心某几个，把某几个取出来，把其他的放在res变量中
// console.log(title, last)

// ---------------实战项目重点:左边声明变量的解构要和右边的数据要一致
// let options = {
//   size: {
//     width: {
//       size: {
//         width: 100
//       }
//     },
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// }
// let { size: { width: { size: { width } }, height }, items: [item1, item2], extra } = options// 解构的过程就是按照左边变量的结构和右边的数据要一致，要一一对应
// console.log(width, height, item1, item2, extra)
