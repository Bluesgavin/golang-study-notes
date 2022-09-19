# 条件控制/Switch

switch 用于多条件时，更好地控制逻辑分支。

## 用法

switch 搭配 `case` 实现可读性更好的条件控制，其中 `default` 分类是默认分支。但所有条件都不符合时，会进入默认分支。

```go
swicth ext {
  case "a":
    // ...
  case "b":
    // ...
  case "c":
    // ...
  default:
    // ...
}
```

## 执行顺序

swicth 语法中的 `case` 执行顺序为从上往下，直到匹配条件为止。如果所有 `case` 都不符合，就会进入 `default`。 注意！`default` 的特殊条件，无论写在什么顺序，都会把所有 `case` 跑完之后再匹配 `defualt`。

## 条件表达式的类型

Go 中 `switch` 语句各表达式的求值结果可以为各种类型值，只要它的类型支持比较操作就 可以了。比如整型、布尔类型、字符串类型、复数类型、元素类型都是可比较类型的数组类型，甚至字段类型都是可比较类型的结构体类型，也可以。下面就是一个使用自定义结构 体类型作为 switch 表达式类型的例子：

```go
type person struct{
  name string
  age int
}
func main(){
  p:=person{"tom",13}
  switch p{
    case person{"tony",33}:
      println("matchtony")
    case person{"tom",13}:
      println("matchtom")
    case person{"lucy",23}:
      println("matchlucy")
    default:
      println("nomatch")
  }
}
```

如果求值结果始终为 true，那么我们甚至 可以省略 switch 后面的表达式，比如下面例子：

```go
//没有initStmt语句的switch语句
switch {
  case bool_expr1:
  case bool_expr2:
  //......
}
```

## 条件语句支持列表

Go 中可以让几个不同的条件执行相同的逻辑。

```go
func checkWorkday(aint){
  switch a{
    case 1,2,3,4,5:
        // 符合 1,2,3,4,5都会执行这里
    case 6,7:
        // 符合 6,7 都会执行这里
    default:
        // ...
  }
}
```
## fallthrough
在 C 语言中，我们需要显式调用break来阻止代码执行完当前case之后执行下一个case。但在 Go 默认是不会执行下一个case的。但是如果开发者需要程序可以执行多个case，就要用到 `fallthrough` 关键字了。
```go
swicth ext{
  case ext1:
    // 满足ext1后执行
    fallthrough
  case ext2：
    // 满足ext2后执行
    fallthrough
  default:
    // ...
}
```

## type swicth
`type swicth` 是一种特殊用法，可以用于判断变量的类型。
```go
func main(){
  var xinterface{}=13 
  switch x.(type){
    case nil:
      println("xisnil")
    case int:
      println("thetypeofxisint")
    case string:
      println("thetypeofxisstring")
    case bool:
      println("thetypeofxisstring")
    default:
      println("don'tsupportthetype")
  }
}
```
switch 关键字后面跟着的表达式为 x. ( type) ， 这种表达式形式是 switch 语句专有的，而 且也只能在 switch 语句中使用。 这个表达式中的 x 必须是一个接口类型变量 ， 表达式的求 值结果是这个接口类型变量对应的动态类型。

通过 x. (type) ， 我们除了可以获得变量 x 的动态类型信息之外，也能获得其动态 类型对应的值信息，现在我们把上面的例子改造一下：
```go
func main(){
  var x interface{}=13
  switch v:=x.(type){
    case nil:
      println("v is nil")
    case int:
      println("the type of v is int,v=",v)
    case string:
      println("the type of v is string,v=",v)
    case bool:
      println("the type of v is bool,v=",v)
    default:
      println("don't support the type")
  }
}
```
这里v 存储的是变量 x 的动态类型对应的值信息