// ------Module import导入
// import name2, { addr as addr2 } from './2-14Module导出' // as修改导出变量名
// console.log(name2, addr2)

// 函数导入
// import say, { run } from './2-14Module导出'
// say('hello world')
// run()

// import { say, run } from './2-14Module导出'
// say('say hello')
// run()

// 对象导入
// import obj from './2-14Module导出'
// let { data, des } = obj
// console.log(data, des)

// 类的导入
// import { Test, Animal } from './2-14Module导出'

// import * as Mod from './2-14Module导出'
// // * as Mod就是我把你这里所有默认的导出模块放在Mod对象里面，用的时候Mod去引用
// let test = new Mod.Test()
// console.log(test.id)
// let animal = new Mod.Animal()
// console.log(animal.name)
// let people = new Mod.default()// 这里的eslint报错是小写字母开始，可忽略
// console.log(people.id)

// import { say } from './2-14Module导出'
// say()
