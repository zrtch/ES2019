// --------Regexp Sticky（y修饰符）
// es6中的y修饰符是什么含义？es5支持y修饰符吗？
// const s = 'aaa_aa_a'
// const r1 = /a+/g
// const r2 = /a+/y
// // y是sticky的缩写，表达的是粘连
// console.log(r1.exec(s))// 匹配的是aaa
// console.log(r2.exec(s))

// console.log(r1.exec(s))// 找匹配a+的字符串
// console.log(r2.exec(s))

// es5如何在正则中处理中文问题，如果是多个字节呢?es6有什么高招？
// unicode是国际上非常流行的也是非常著名的字符编码标准
// let s = '𠮷'
// let s2 = '\uD842 \uDFB7'
// console.log(/^\uD842/.test(s))
// console.log(/^\uD842/u.test(s))
// 如果想在正则表达式中使用unicode码点来识别字符，要用/u加花括号unicode码点值
// console.log(/^.$/.test(s))
// console.log(/\u{20BB7}/u.test(s))// 20BB7是𠮷的码点值
// console.log(/\u{61}/u.test('a'))
// 只要到es6，如果你的字符串有中文，不管单个字节还是过个字节，通通加u
// console.log(/𠮷{2}/u.test('𠮷𠮷'))
// 如下的例子，es6正则表达式后面要习惯性的加个u
// console.log(/[a-z]/i.test('\u212A'))
// console.log(/[a-z]/iu.test('\u212A'))
