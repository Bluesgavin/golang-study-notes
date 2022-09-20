# 方法/Method

我们知道，Go 语言从设计伊始，就不支持经典的面向对象语法元素，比如类、 对象、 继 承，等等，但 Go 语言仍保留了名为 “方法（method）” 的语法元素。目的是实现它的组合设计哲学。

## 声明方法

方法的声明方式与函数很像，但比函数多一个 receiver。这个 receiver 参数也是方法与类型之间的纽带。Go 中的方法必须是归属于一个类型的，而 receiver 参数的类型就是这个方法归属的类 型，或者说这个方法就是这个类型的一个方法。

```go
//给t类型定义方法
func (t*T或T) MethodName(参数列表) (返回值列表){
  //方法体
}
```

如果 t 的类型为 T，那么说这个方法是类型 T 的一个方法；如果 t 的类型为 *T ， 那么就说这个方法是类型 *T 的一个方法。 而且，要注意的是，每个方法只能有一个 receiver 参数 ， Go 不支持在方法的 receiver 部分放置包含多个 receiver 参数的参数列 表，或者变长 receiver 参数。

## receiver 参数名必须唯一

声明方法时，receiver 的参数名不得与方法入参的参数名一样，否则会报错。

```go
type T struct{}
func (t T) M(tstring){ //编译器报错：duplicate argument t(重复声明参数t)......
}
```

因此，如果方法体中没有用到 receiver 参数，建议直接省略

```go
type T struct{}
func (T) M(t string){
  //......
}
```

## receiver 参数的基类型限制

receiver 参数的基类型本身不能为指针类型或接口类型，否则会报错。

```go
type MyInt *int
func(rMyInt) String()string{
  //r的基类型为MyInt，编译器报错：invalidreceiver
  return fmt.Sprintf("%d",*(*int)(r))
}

type MyReaderio.Reader
func(rMyReader)Read(p[]byte)(int,error){
  //r的基类型为MyReader，编译器报错
  return r.Read(p)
}
```
## 方法声明要与 receiver 参数的基类型声明放在同一个包内
方法声明要与 receiver 参数的基类型声明放在同一个包内。因此我们不能为原生类型（诸如 int、 float64、 map 等）添加方法 。或者跨越 Go 包为其他包的类型声明新方法 。