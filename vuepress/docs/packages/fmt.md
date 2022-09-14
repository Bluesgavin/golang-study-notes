# fmt

fmt 是 Go 的官方库之一，与 C 的 `printf` 与 `scanf` 类似，用于格式化的 I/O. 它可以在终端打印出现信息，在学习过程中十分常用，这里我们可以专门看几个使用方式。

更多信息，可以查看官方文档：[https://pkg.go.dev/fmt](https://pkg.go.dev/fmt)

## Println

`Println` 会用默认的格式化方式，生成标准输出。如果输出内容是多个，会自带空格。

```go
const name, age = "Kim", 22
fmt.Println(name, "is", age, "years old.")

// Kim is 22 years old.
```

## Printf

`Printf` 是另一个常见的打印日志方式，它会根据一个格式模板，生成标准输出。调用时，第一个参数就是格式模板。

```go
const name, age = "Kim", 22
fmt.Printf("%s is %d years old.\n", name, age)

// Kim is 22 years old.
```

## 模板代号解释

打印时我们会用到一些如`%v`,`%s`等代号，这些在打印时都有特殊的意思，下面列举一些常用的：

#### 通用代号

通用代号指，无论是什么数据类型都可以用的代号。

- %v 对应数据类型的默认格式
- %#v 用 Go 语法表示值内容
- %T 用 Go 语法表示值数据类型

#### %v 详细说明

下面列出，不同数据类型在用`%v`时，所用的默认代号

- bool: %t
- int, int8 etc.: %d
- uint, uint8 etc.: %d, %#x if printed with %#v
- float32, complex64, etc: %g
- string: %s
- chan: %p
- pointer: %p

#### bool

- %t 用 true 或者 false 表示数值

#### Integer

- %d 用 10 进制表示数值

#### Floating-point and complex constituents

- %e 科学表示法
- %f 小数点，但没有指数
- %g 大指数用 %e，其他情况用 %f

#### string

- %s 未转换的字符

#### chan

- %p 0x 开头的 16 进制地址

#### pointer

- %p 0x 开头的 16 进制地址
