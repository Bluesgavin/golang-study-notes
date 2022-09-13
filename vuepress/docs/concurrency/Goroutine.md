# Go程 / Gorouttine
 
Go 程（goroutine）是由 Go 运行时管理的轻量级线程。

写法为：

```go
go f(x,y,z)
```

运行时，会启动一个新的 Go 程并执行

```go
package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	go say("world")
	say("hello")
}

// 输出结果
// 分别打印5次 hello 和 world，但由于操作系统的打印输出每次只能输出一个，因此看起来像是先后打印。但实际上两者应该是几乎同时打印的。

//world
//hello
//hello
//world
//world
//hello
//hello
//world
//world
//hello
```

## 访问冲突
由于协程运行在相同的内存地址中，因此当两个协程用到相同的变量时，有可能会出现访问问题。
```go
func say( x,y,z int){
  // ...
}

func main(){
  go say(1,2,3)
}
```
在这段代码中，say函数运行在一个新的Go程中。但1，2，3这几个变量在主 Go 程中。如果想要在say中正常访问这些变量，需要保证这些访问是同步的。在GO中提供了 sync 包解决，但也有一个更常用的方式—— 信道(Channels)