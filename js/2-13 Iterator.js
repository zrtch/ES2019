// ------------Iterator
// es5如何让不支持遍历的数据结构可遍历呢？
// let authors = {
//   allAuthors: {
//     fiction: ['ab', 'cd', 'ef'],
//     scienceFiction: ['aaa', 'bbb', 'ccc'],
//     fantasy: ['jay', 'kobe', 'james']
//   },
//   Addres: []
// }
// // 当你内部结构发生变化的时候，所有遍历的逻辑都需要变换，有一百处就得改一百处
// let r = []
// for (let [, v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
// }
// console.log(r)

// es6如何让不支持遍历的数据结构可遍历呢？
// let authors = {
//   allAuthors: {
//     fiction: ['ab', 'cd', 'ef'],
//     scienceFiction: ['aaa', 'bbb', 'ccc'],
//     fantasy: ['jay', 'kobe', 'james']
//   },
//   Addres: []
// }
// // Symbol.iterator自定义遍历器必须这么写
// // 1,先确定部署的接口是一个什么框架，输入是什么，输出有什么的约束
// // 2，控制我们内部遍历的指针，指针是根据我们的数据结构决定的
// authors[Symbol.iterator] = function () {
//   // this是输入
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   return {// reurn是输出，输出必须有一个next方法，而且next方法必须要返回一个对象，这个对象有两个字段，done和value
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]// 取得是keys0,fiction用完以后下一个接着用，从上到下控制你的指针遍历
//           keys.shift()
//         }
//       }
//       return {// done用来表示遍历是否结束，f未结束，t已结束。value是当前所遍历的项的值，比如1234有四项
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// 用generator就是利用它遵循了迭代器协议，不再显示的手写迭代器协议，利用这个写法，这个更符合写代码逻辑，目标就是把不可遍历结构进行遍历
// let authors = {
//   allAuthors: {
//     fiction: ['ab', 'cd', 'ef'],
//     scienceFiction: ['aaa', 'bbb', 'ccc'],
//     fantasy: ['jay', 'kobe', 'james']
//   },
//   Addres: []
// }

// authors[Symbol.iterator] = function * () {
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   while (1) {
//     if (!values.length) {
//       if (keys.length) {
//         values = allAuthors[keys[0]]
//         keys.shift()
//         yield values.shift()
//       } else {
//         return false
//       }
//     } else {
//       yield values.shift()
//     }
//   }
// }

// let r = []
// for (let v of authors) {
//   r.push(v)
// }
// console.log(r)
