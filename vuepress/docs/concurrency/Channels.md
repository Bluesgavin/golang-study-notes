# 信道 / Channels

信道是一个类型管道，你可以用操作符 `<-`,实现数据的发送和接受。

```go
// 发送v 到ch 信道
ch <- v 
// 声明变量v，值从信道ch中获得
v := <-ch
```
观察上述代码可以发现，数据的方向也就是操作符箭头的方向。

信道也可用用`make`创建
```go
ch := make(chan int)
```

默认情况下，信道会等数据完成之后才开始发送或接受。这样就可以免去开发者，手动编写控制锁或者条件语句。

## 示例
假如现在存在一个切片s，需要分别计算它前后一半的数值总和。我们用两个GO程来实现
```go
package main

import "fmt"

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
    fmt.Println(v)
	}
  fmt.Println(s)
	c <- sum // 将和送入 c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // 从 c 中接收

	fmt.Println(x, y, x+y)
}
```
输出结果:
```
-9
4
0
[-9 4 0]
7
2
8
[7 2 8]
-5 17 12
```
可以看到，尽管我们用了GO程，但输出的结果顺序如在同一个协程一样。
因为的第一次执行sum时，程序发现信道需要写入。因此会等第一次sum执行完之后，才开始执行第二次的sum。因此在这个例子中，虽然我们用了两个GO 程，但实际程序运行时，并没有分别同时执行2个sum。
## 关闭信道
通道本身并不提供关闭通道的方法，而是通过系统内置的close()方法关闭通道。在通道关闭后再继续往通道写数据会引发panic错误，而读数据则可以持续读取到通道中没有值为止，读取通道支持多参数返回，其中第一个参数表示从通道中读出的值，第二个参数表示是否正确读出数据，在通道关闭的情况下会返回false，可以借此判断通道是否已经关闭
```go
package main

import (
	"fmt"
)

func main() {

	// 创建一个通道
	msgChan := make(chan string, 10)

	// 先往通道写入一条记录
	msgChan <- "a normal message"
	
	// 关闭通道
	close(msgChan)

	// 持续从通道中读取数据，ok值为false时，表示通道已经关闭且没有数据
	for {
		msg, ok:= <-msgChan
		if !ok {
			fmt.Println("chan already closed")
			return
		}
		fmt.Printf("message: %s\n", msg)
	}
}
```

## 单向信道
正常情况下，信道是双向的，既可读也可用写。但出于安全考虑，在某些情况下，我们可能会用到单向的信道。单向可以由双向通道转换，但不能转换回双向通道。
它的定义方式如下：
```go
//定义只读通道：
var <-chan {通道类型}
//定义只写通道：
var chan<- {通道类型}
```