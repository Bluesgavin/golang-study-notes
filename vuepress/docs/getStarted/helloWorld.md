# 运行你的第一个程序

与所有语言一样，我们将把“Hello World”，作为学习 Go 语言写的第一个程序。

## 编写代码
1.创建文件夹
```bash
mkdir hello
```
2.写下我们的第一个程序，文件名为`hello.go`
```go
package main

import "fmt"

func main(){
  fmt.Println("Hello World!")
}
```
3.运行程序
```bash
go run ./hello.go
```
可以看到终端输出
```bash
$ go run ./hello.go
Hello World!
```

## 分析代码
现在回头来看看，刚刚我们写的`hello.go`实际上做了些什么。
```go
package main
```
go 的第一行必须写 `package 【包名】` 用于说明当前这个包是什么名字。
```go
import "fmt"
```
接下来我们用`import`关键字引用了一个名为`fmt`的包，这是go的基础包，提供一些可以在终端输出打印的能力。
```go
func main(){
  fmt.Println("Hello World!")
}
```
最后我们定义了一个`main`函数，它是包的默认入口。在其中我们调用了`fmt`包的`Println`方法，并打印了"Hello World!"字符。


## 建议
在接下来的内容中，我们会经常用到`fmt`包。我建议你可以先阅读[fmt包](/packages/fmt.md),了解一下`fmt`的方法，以免在之后的内容中感到困惑。