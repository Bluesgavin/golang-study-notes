# 错误处理
程序的错误捕捉一直是开发的重点，在 C 语言中，我们需要通过返回值来判断错误。而 GO 中官方设计了一套错误处理的机制，主要通过返回值实现。

## error类型与错误值构造
error 接口是 Go 原生内置的类型，它的定义如下：
```go
//$GOROOT/src/builtin/builtin.go
type interface error{
  Error()string
}
```
开发中，我们可以通过 `errors.New` 和 `fmt.Errorf` 构造出一个error结构的错误值：
```go
err := errors.New("your first demo error")
errWithCtx = fmt.Errorf("index %d is out of bounds",i)
```

## 错误处理实际使用
### 1.透明错误处理策略
最简单的错误策略莫过于完全不关心返回错误值携带的具体上下文信息，只要发生错误就进入唯一的错误处理执行路径，比如下面这段代码：
```go
err:= doSomething() 
if err!=nil{
  //不关心err变量底层错误值所携带的具体上下文信息
  //执行简单错误处理逻辑并返回......
  return err
}
```
这也是 Go 语言中 最常见的错误处理策略 ， 80% 以上的 Go 错误处理情形都可以归类到这种策略下。这样构造出的错误值代表的上下文信息，对错误处理方是透明的，因此这种策略称为“透明错误处理策略”。


### 2.“哨兵”错误处理策略
这种策略主要是解决透明错误处理策略精度不够的情况。在透明错误处理中，我们只能得到“是否有错”的程度。但假如我们想要得到“是什么错误”，就需要对第一步得到的错误进一步分析。假如使用默认代码大致实现如下：
```go
data,err:=b.Peek(1)
if err!=nil{
  switch err.Error(){
    case"bufio: negative count":
        //......
        return
    case"bufio: buffer full":
        //......
        return
    case"bufio: invalid use of UnreadByte":
        //......
        return
     default:
        //......return
  }
}
```
但这显然不是好的写法，这会导致很严重的耦合。Go 1.13 之后推出了 `error.Is` 方法可以很好地解决这个问题。
```go
// 定义错误类型，变量用Err开头
var(
  ErrInvalidUnreadByte=errors.New("bufio: invalid use of UnreadByte")ErrInvalidUnreadRune=errors.New("bufio: invalid use of UnreadRune")
  ErrBufferFull=errors.New("bufio: buffer full")
  ErrNegativeCount=errors.New("bufio: negative count")
)

func main(){
  if errors.Is(err,ErrBufferFull){
    //判断是否为某类型错误
  }
}
```