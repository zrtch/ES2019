// JSON问题修复，数组、字符串、对象、函数等能力进一步增强，同时新增的 BigInt 数据类型也格外引人注目
// ES10有一个特色，就是对原型对象能力做了增强，原来来基础上做了升级

// JSON.stringify用转义的方式来输出这个结果，在es10之前会报错
// console.log(JSON.stringify('\u{D800}'))

// arr.flat():扁平化输出，他会按照一个可指定的深度递归遍历数组
// let arr = [1, [2, 3], [4, 5, [6, 7, [8, 9]]]]
// console.log(arr.flat(3))// 深度默认值是1，满足深度就可全部遍历

// let arr = [1, 2, 3]
// console.log(arr.map(item => item * 2))// map对每个元素遍历
// console.log(arr.map(item => [item * 2]).flat())
// console.log(arr.flatMap(item => item * 2))// 上面写法的简写，flatMap意思就是先map在flat

// 去掉多余空格的方法
// let str = '     foo  '
// console.log(str.replace(/^\s+|\s+$/g, ''))// 去掉多余空格es10之前的做法
// // trim是去除字符串首和尾的空格
// console.log(str.trim())
// // trimstart和trimLeft都是去除字符串首部的空格
// console.log(str.trimLeft())
// // trimEnd和trimRight都是去除字符串尾部的空格
// console.log(str.trimRight())

// es5的方法exec
// let str = `"foo" and "bar" and "baz"`

// function select (regExp, str) {
//   const matches = []
//   while (true) {
//     const match = regExp.exec(str)// 利用捕获
//     if (match === null) break
//     matches.push(match[1])
//   }
//   return matches
// }

// console.log(select(/"([^"]*)"/g, str))
// console.log(str.match(/"([^"]*)"/g))// 只有小括号里面的叫捕获，必须要加g

// function select (regExp, str) {
//   const matches = []
//   str.replace(regExp, function (all, first) {
//     matches.push(first)
//   })
//   return matches
// }
// console.log(select(/"([^"]*)"/g))

// str.matchAll可以拿到所有的完整匹配，这个for循环只是获取每个的捕获
// let str = `"foo" and "bar" and "baz"`
// function select (regExp, str) {
//   const matches = []
//   for (const match of str.matchAll(regExp)) {
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select(/"([^"]*)"/g, str))

// Object.fromEntries用这个把你的数组转换成obj,用object指着你的键名，我就直接访问
// const arr = [['foo', 1], ['bar', 2]]
// const obj = Object.fromEntries(arr)
// console.log(obj.bar)

// 把这个object过滤一下，长度大于3的过滤掉
// const obj = {
//   abc: 1,
//   def: 2,
//   ghkkkk: 3
// }
// // 利用object转数组，再用fromEntries转回数组
// let res = Object.fromEntries(
//   Object.entries(obj).filter(([key, val]) => key.length === 3)
// // 先把obj这个这个对象变成数组，然后利用数组的filter过滤的函数填一个条件，这个条件就是key,满足这个条件过滤3
// )
// console.log(res)

// 对try catch 捕获异常的能力的增强,现在允许catch不加e
// try {

// } catch {

// }

// es10新增的数据类型：BigInt
// BigInt用来解决2的53次方以外的数字
// console.log(11n);
