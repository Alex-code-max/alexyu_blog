# 作用域

## 下面的代码打印什么内容，为什么？

```js
// 情况 1

//  情况 2
var b = 10;
var c = function b() {
  b = 20;
  console.log(b)
}
c()

// 上面两种都打印：
ƒ b() {
  b = 20;
  console.log(b)
}
```

b 函数（函数表达式定义函数）是一个相当于用 const 定义的常量，内部无法进行重新赋值，如果在严格模式下，会报错"Uncaught TypeError: Assignment to constant variable."

## 简单改造下面的代码，使之分别打印 10 和 20

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
```

打印 10：

```js
var b = 10;
(function b(b) {
  window.b = 20;
  console.log(b);
})(b);
```

```js
var b = 10;
(function b() {
  b.b = 20;
  console.log(b);
})();
```

打印 20：

```js
var b = 10;
(function b(b) {
  b = 20;
  console.log(b);
})();
```

```js
var b = 10;
(function b() {
  var b = 20;
  console.log(b);
})();
```

## 下面代码输出什么

```js
var a = 10;
(function () {
  console.log(a);
  a = 5;
  console.log(window.a);
  var a = 20;
  console.log(a);
})();
```

依次输出：undefined -> 10 -> 20

解析：

在立即执行函数中，var a = 20; 语句定义了一个局部变量 a，**由于 js 的变量声明提升机制**，局部变量 a 的声明会被提升至立即执行函数的函数体最上方，且由于这样的提升并不包括赋值，因此第一条打印语句会打印 undefined，最后一条语句会打印 20。

由于全局的 var 会挂载到 window 对象下，并且立即执行函数里面有变量提示。
‘a = 5;’这条语句执行时，局部的变量 a 已经声明，因此它产生的效果是对局部的变量 a 赋值，此时 window.a 依旧是最开始赋值的 10

## var 变量定义提升

```js
var name = "Tom";
(function () {
  if (typeof name == "undefined") {
    var name = "Jack";
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
})();
```

输出： 'Goodbye Jack'
