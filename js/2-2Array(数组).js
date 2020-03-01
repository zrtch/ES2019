// for循环
// const arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 2) {
//     // break
//     continue
//   }
// //   console.log(arr[i])
// }

// // foreach写法简洁，但不支持breakhecontiue,它只能从头遍历到尾
// arr.forEach(function (item) {
//   if (item === 2) {
//     // break
//     // continue
//   }
//   console.log(item)
// })

// every能不能继续遍历，取决于这个函数的返回值，默认为false,
// arr.every(function (item) {
//   if (item === 2) {
//     // 这里不能使用break，输出函数的返回值
//   } else {
//     console.log(item)
//   }
//   return true
// })

// for in是支持break和continue，但是index是字符串
// for (let index in arr) {
//   if (index * 1 === 2) {
//     // 两个等号只检查值，三个等号既检查值也检查类型
//     continue
//   }
//   console.log(index, arr[index])
// }

// for of随意遍历数组还是任意数据结构。 for循环，forEach,every是为数组设计遍历的，for in是为object设计遍历的

// ------------第二小节：如何将伪数组转换成数组？---------------
// 伪数组：1，这个对象是按照索引方式存储数据; 2，具备一个length属性
// {0:'a',1:'b',length:2}这就是一个伪数组
// es5如何将伪数组转换成数组？
// let args = [].slice.call(arguments)// collection
// let imgs = [].slice.call(document.querySelectorAll('img'))// nodelist
// console.log(args, imgs)

// es6如何将伪数组转换成数组？
// Array.prototype.from(Array是数组对象，prototype是数组原型数组，from是es6新加的api,用来转转伪数组到数组)
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()//转换之后可以对数组进行正常操作

// Array.from(arrayLike(伪数组)，mapFn(遍历的函数),thisArg(可以接收一个this对象))
// let array = Array.from({ length: 5 }, function () { return 1 })
// console.log(array)// Array.from初始化并填充默认值

// --------------第三小节：如何生成新数组？-------------------
// es5如何生成新数组？
// let array=Array(5)
// let array=["",""]

// es6如何生成新数组？
// 第一种： Array.prototype.of(它接收一个参数，也接收n个参数)
// let array = Array.of(1, 2, 3, 4, 5)
// console.log(array)
// 第二种：Array.prototype.fill(fill为填满的意思)
// let array = Array(5).fill(1)
// console.log(array)
// Array.fill(value(填充的值),start(默认0),end(默认为所有元素))
// let array = [1, 2, 3, 4, 5]
// console.log(array.fill(8, 2, 4))// 替换数组的某一块区域；8为value,2为启始值,4为终值

// --------------第三小节：如何查找数组？-------------------
// es5如何查找数组？
// array.filter(1,所有满足你条件的元素筛出来 2,判断返回的数据为空还是非空)。能实现这个东西，但不是最高效的
// let array = [1, 2, 3, 4, 5]
// let find = array.filter(function (item) {
//   return item % 2 === 0
// })
// console.log(find)

// es6如何查找数组？
// Array.prototype.find (find找到的是返回的那个值，find只要找到了，就不会往下找了)
// Array.prototype.findIndex (findIndex返回的是那个位置)
// let array = [1, 2, 3, 4, 5]
// let find = array.findIndex(function (item) {
//   return item % 2 === 0
// })
// console.log(find)
