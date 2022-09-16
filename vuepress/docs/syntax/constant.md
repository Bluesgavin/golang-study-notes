# 常量/Constant 

常量指不可修改的值，程序在编译阶段就可以知晓。Go 中的常量只局限于基本类型：数值、字符串、`true`和`false`。

## 定义常量
常量的定义用关键字`const`
```go
// 定义常量PI，类型为float32，值是3.1415926
const PI float32 = 3.1415926 

// 同时定义多个常量
const (
  A = 10
  B = 20
)
```

## 内置常量
Go 中还预先定义了几个常量：`true`,`false`和`iota`
其中`true`和`false`用于`bool类型`的取值
`iota`是一个自增常量，其作用是在一个const定义域内，iota每出现一次，其自身的值会自增1，从0开始取值

```go
const (
    None = iota // 取值0
    Monday = iota // 取值1
    Tuesday = iota // 取值2
    Wednesday = iota // 取值3
    Thusday = iota // 取值4
    Friday = iota // 取值5
    Saturday = iota // 取值6
    Sunday = iota // 取值7
)

const (
    c1 = iota * 26 // 取值0
    c2 = iota * 26 // 取值26
    c3 = iota * 26 // 取值52
)
```
如果在const定义域内的每个iota常量表达式是一样的，可以进行简写
例子：定义简写自增常量
```go
const (
    None = iota // 取值0
    Monday // 取值1
    Tuesday // 取值2
    Wednesday // 取值3
    Thusday // 取值4
    Friday // 取值5
    Saturday // 取值6
    Sunday // 取值7
)

const (
    c1 = iota * 26 // 取值0
    c2 // 取值26
    c3 // 取值52
)
```

## 用常量表示枚举
Go 中没有枚举，通常用常量实现枚举效果
```go
const (
    OrderDesc = "desc"
    OrderAsc = "asc"
)

const (
    HTTPStatusCodeSucceed = 200
    HTTPStatusCodeUnauthorized = 401
    HTTPStatusCodeNotFound = 404
)
```