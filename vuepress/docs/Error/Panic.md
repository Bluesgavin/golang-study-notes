# 异常/Panic

前面我们讲了 GO 中的错误处理，但我还需要强调一点： **错误不是异常**。  
GO 中异常触发后，假如没有被捕获，Go 程序就会终止，即便出现异常的位置不在主 Goroutine 中也会终止。

在 Go 中 ， panic 主要有两类来源，一类是来自 Go 运行时 ， 另一类则是 Go 开发人员通 过 panic 函数主动触发的 。 无论是哪种，一旦 panic 被触发，后续 Go 程序的执行过程都 是一样的，这个过程被 Go 语言称为 panicking 。

## panic 的触发

我们可以用 `panic` 主动触发一个异常，异常触发后 GO 会停止执行函数剩下的内容，逐级往上退出。  
举个例子：

```go
func one (){
  println("1-1")
  two()
  println("1-2")
}

func two(){
  println("2-1")
  println("2-2")
}

func main(){
  println("0-1")
  one()
  println("0-2")
}
```

正常情况这段代码的执行输出应该是这样：

```
0-1
1-1
2-1
2-2
1-2
0-2
```

但如果我们在 two 中加入了 panic

```go
func two(){
  println("2-1")
  panic("panic occurs in two")
  println("2-2")
}
```

输出就会变为：

```
0-1
1-1
2-1
```

观察代码我们可以发现两点：

1. panic 触发后，同函数后续代码不会继续执行
2. panic 调用时，可以传入异常提示信息。

## panic 中的 defer

现在我们知道了 panic 会阻止函数继续执行，但其实有一种情况是特殊的，就是 defer 函数。  
继续修改 two 函数代码

```go
func two() {
	defer func() {
		println("2-3")
	}()
	println("2-1")
	panic("panicoccursinbar")
	println("2-2")
}
```

输出结果为：

```
0-1
1-1
2-1
2-3
```

可以看到 `2-3` 也被输出了。

## 通过 recover 捕获 panic

通过上面例子，我们知道了 defer 可以说是 panic 触发之后的最后出口。那我们是否可以在这里捕获异常，甚至修复呢？答案是肯定的，它就是 recover 函数。  
recover 是 Go 内置的专门用于恢复 panic 的函数， 它必须被放在一个 defer 函数 中才能生效。 如果 recover 捕捉到 panic ， 它就会返回以 panic 的具体内容为错误上下文 信息的错误值。 如果没有 panic 发生，那么 recover 将返回 nil。 而且，如果 panic 被 recover 捕捉到 ， panic 引发的 panicking 过程就会停止。
我们继续修改 two 函数代码：

```go
func two() {
	defer func() {
    if e:= recover();e != nil{
      fmt.Println("recover the panic: ", e)
    }
	}()
	println("2-1")
	panic("panicoccursinbar")
	println("2-2")
}
```

输出就会变为

```
0-1
1-1
2-1
recover the panic: (0x46c100,0x493180)
1-2
0-2
```

可以看到不仅 two 函数之后内容正常执行了，panic 也被捕获到了。

## 用 panic 提示潜在 bug

panic 是主动触发异常的方法，但是为什么开发者要主动这么做呢？其中，提示 bug 就是一个很好的例子。  
我们的开发时写的函数，不仅是自己在用，很多时候会被别人调用。我们不能完全依赖文档，需要考虑到用户有可能在没有阅读过文档的前提下使用我们的函数，因此一个开发使用上的提示就很有必要了。通过 panic 我们可以实现这样的代码：

```go
  switch a.(type){
    case int:
      //...
    case string:
      //...
    default:
      // 如果a不是int或者string就用panic提示
      panic("a must be int or string")
  }
```
