# 自定义类型/Type

虽然 Go 内置给我们定义了一系列的数据类型， 但在开发的时候，我们总希望可以有更多的复合结构选择。 因此 Go 为我们提供了可以自定义数据类型的途径。

## 定义一个新类型

我们可以通过`type`关键字，定义我们自己的类型
```go
// 定义一个叫 myType 的类型，他的底层类型是int
type myType int
```
## 新定义的类型可以被二次利用
通过`type`定义的类型，可以被`type`二次利用
```go
type myType int
type anotherType myType
```
## 底层类型
前面代码注释中，我们提到了一个名词——“底层类型”。
```go
type myType int
type anotherType myType
```
在这个例子中，`mytype`的底层类型就是`int`。而`anotherType`虽然继承于`myType`但，由于不是Go的原生类型，所以会继续往下找。直到找到`int`。因此`myType` 和`anotherType`的底层类型都是`int`。这种情况下，我们认为这两个类型是一样的。                  
记住：底层类型在 Go 语言中有重要作用，它被用来判断两个类型本质上是否相同（Identical）。
## 显式转换
如果两个类型本质相同，Go 会允许他们的变量可以进行显式转换。
```
type myType int
type anotherType myType
type S string

func main(){
	var m1 myType
	var m2 anotherType = 5
	m1 = myType(m2) // 允许显式转换

	var s S = "hello"
	m1 = myType(s) // 错误：cannot converts (S) to myType
}
```
## 定义复合类型
当然前面讲的定义原生类型就太小儿科了，`type`真正的常用场景是定义复合类型
```go
type M map[int]string
type S []string
```

## 类型别名
还有一个用法是给已有的类型起别名。
```go
// aType太复杂，我们给他一个别名T
type T aType
```
## 块式定义
与`var`一样，`type`支持块方式批量定义类型
```go
type (
	T1 int
	T2 T1
	T3 string
)
```