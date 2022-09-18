# 结构体/Struct

`type`只是用于定义新类型，但有时候我们需要一种方式来描述一个实例。这就可以用到结构体(struct)

## 定义结构体

```go
type T struct {
	Field1 T1
	Field2 T2
	...
	FieldN Tn
}

```

## 访问性

我们定义在`package`中的类型，假如想要在外部引用当前 package 时也能调用，就需要把类型名字改为大写开头。

```go
package book

type Book Struct {
	Title string
	Pages int
	Indexes map[string]int
}
```

```go
import ".../book"
var b book.Book
b.Title = "book name"
b.Pages = 100
```

## 初始化

结构体初始化时，我们可以直接给每个字段依次赋值。

```go
type Book Struct {
	Title string
	Pages int
	Indexes map[string]int
}
func main(){
	var book := Book{"book name",100,make(map[string]int)}
}
```

但这种方式有两个问题：

#### 1.当结构体有非导出字段时会失效

一旦结构体中有非导出字段，这种逐一赋值的方式就会报错

```go
type Book Struct {
	Title string
	pages int //非导出（小写开头）
	Indexes map[string]int
}
func main(){
	var book := Book{"book name",100,make(map[string]int)} //  报错
}
```

## 2.顺序不一定如我们所想

Go 其实并不推荐我们用逐一赋值的方式初始化，因为这种方式有可能出现不如我们所想的顺序效果。

## 正确的初始化方式

为了避免上述问题，Go 推荐我们用`field:value`的方式初始化。

```go
type Book Struct {
	Title string
	Pages int //非导出（小写开头）
	Indexes map[string]int
}
func main(){
	var book := Book{
		Title:"book name",
		Pages:100,
		Indexes:make(map[string]int)
	}
}
```
