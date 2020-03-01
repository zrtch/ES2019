// ------------template语法更新
// es5中字符串换行，包含变量或表达式，包含逻辑运算怎么办？es6有更优雅便捷的方式吗？
// const a = 20
// const b = 10
// const c = 'javascipt'

// // const str = 'my age is ' + (a + b) + 'i love' + c// es5用字符串拼接的方式
// const str = `my age is ${a + b} i love ${c}`// es6用字符串模板
// console.log(str)

// const retailPrice = 20
// const wholeSalePrice = 16
// const type = 'retail'
// let showTxt = ''
// if (type === 'retail') {
//   showTxt = '您此次的购买单价是:' + retailPrice
// } else {
//   showTxt = '您此次购买的批发价是:' + wholeSalePrice
// }
// console.log(showTxt)// es5的做法是通过逻辑判断不断的改变showTxt的内容以及利用字符串拼接

// 对于字符串处理非常复杂的逻辑可以用以下这个逻辑
// 前面声明一个函数，后面是她的一个模板，然后再这个函数中可以进行任何操作，最终返回想要的字符串
// function Price (strings, type) { // 需要设定一个字符串模板，传入你要执行的变量
//   let s1 = strings[0]
//   const retailPrice = 20
//   const wholeSalePrice = 16
//   let showTxt = ''
//   if (type === 'retail') {
//     showTxt = '购买单价是：' + retailPrice
//   } else {
//     showTxt = '购买的批发价是：' + wholeSalePrice
//   }
//   return `${s1}${showTxt}`
// }
// let showTxt = Price`您此次的${'retail'}`
// console.log(showTxt)

// es5和中字符串换行？
// let s1 = '我是第一行' +// es5这样做并没有做到真正的换行，不允许单个字符串是换行的，如果要换行，必须要用+号
// '我是第二行'
// es6用新的字符串的字面量，会自动生成一个换行符
// let s1 = `我是第一行
// 我是第二行`
// console.log(s1)
