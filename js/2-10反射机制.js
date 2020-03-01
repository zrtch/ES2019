// -----------Reflect.apply（反射机制）
// console.log(Math.floor.apply(null, [3.72]))//es5的做法
// console.log(Reflect.apply(Math.floor, null, [4.72]))// 我先告诉它我要用apply,在传递floor
// Math.ceil
// let price = 91.5
// if (price > 100) {
//   price = Math.floor.apply(null, [price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// 以上是非反射的情况下，先指定方法，而反射的话是根据我的条件去调用你的方法
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))
// 上面的方法只需要一行代码。用反射的话直接调用apply,然后根据这个条件我来想我执行这个apply的时候去调用哪个方法

// ---------------Reflect.construct（反射机制）
// let d = new Date()
// console.log(d.getTime())
// let d = Reflect.construct(Date, [])// 通过这种方式就可以调用不同的类去动态的去实例一个对象，而不是new的方法
// console.log(d.getTime(), d instanceof Date)// 用intanceof判断d是不是Date的实例

// const student = {}
// const r = Reflect.defineProperty(student, 'name', { value: 'mike2' })
// console.log(student, r)// 习惯用Reflect,原来部署在object的这些方法都会迁移到Reflect上面

// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')//删除属性
// console.log(obj)

// const obj = { x: 1, y: 2 }
// console.log(Reflect.get(obj, 'x'))// 用来读取对象另一种写法
// console.log(Reflect.get([3, 4], 0))// 遇到动态场景，想用动态化的方法去读数据

// const obj = { x: 1, y: 2 }
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'y'))

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))// 可以用这个方法快速打印他的原型对象上到底部署了哪些方法

// const obj = { x: 1, y: 2 }
// // console.log(Reflect.has(obj, 'x'))// 用来验证对象上有没有这个属性
// // obj.z = 3
// Object.freeze(obj)// freeze冻结的实例，不然你扩展
// obj.z = 3
// console.log(Reflect.isExtensible(obj))// 判断这个对象是不是可扩展的

// const obj = { x: 1, y: 2 }// 判断只要你自身的属性，不要你原型链对象的属性
// console.log(Reflect.ownKeys(obj))
// console.log(Reflect.ownKeys([1, 2]))// 数组返回的是索引

// const obj = { x: 1, y: 2 }
// Reflect.preventExtensions(obj)// 阻止Extensions传入这个方法
// console.log(Reflect.isExtensible(obj))

// const obj = { x: 1, y: 2 }
// Reflect.set(obj, 'z', 4)// 利用set操作object对象
// console.log(obj)
// const arr = ['pig', 'pig', 'pig']
// Reflect.set(arr, 2, 'dog')// 修改数组，对他进行赋值操作，也是用set这个方法
// console.log(arr)

// const arr = ['pig', 'pig', 'pig']
// // console.log(Reflect.getPrototypeOf(arr))
// Reflect.setPrototypeOf(arr, String.prototype)// 动态修改原型对象
// // arr.sort()
// console.log(Reflect.getPrototypeOf(arr))
