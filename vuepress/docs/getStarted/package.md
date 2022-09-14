# go 中的package

## 概念
在 Go 语言中，`package` 是一个基础概念，通常会把某些相关逻辑写在一个包中。一个项目由多个包组件，由此实现代码的拆分。在 Go 中没有“类”的概念，package 在某种程度上取代了“类”的角色。
在所有的go代码中，都需要在最开头声明当前包的名字。
```go
// 定义一个包main
package a 
```

## 引用package
我们可以在一个package中引用另一个package，关键字为`import`。
```go
// 引用fmt包
import "fmt"
```
Go 在引用包时，寻找的路径如下：
1. 先是在$GOROOT/src路径下寻找
2. 如果找不到，就到当前项目中的vendor路径下寻找
3. 最后到到$GOPATH/src路径下寻找


## 调用包的方法
在package中，我们可以用关键字`func`声明函数。但函数的名称以大写开头时，这个函数就可以被引用他的人用到，此时这个函数也叫方法。
```go
// 假设有一个package person
package person

// 声明Run为方法
func Run(){}

// 声明say为内部函数
func say(){}
```
此时如果我们引用了person
```go
package main

import "person"

func main(){
  // 没问题
  person.Run()
  // 编译报错
  person.say()
}
```

## 更多引用的写法
### 引用多个包
在引用多个package时，我们可以用括号包起来
```go
import (
  "a"
  "b"
  "c"
)
```
### 别名引用
当包名出现重复时，可以为包定义一个别名，为包名定义别名后对于该引用包的调用全都改用别名。
```go
// 定义一个包A
package a

// 为引用包c/a定义一个别名pkgA
import (
     pkgA "c/a"
)

// 定义一个A方法，调用别名为pkgA的包c/a中的方法Test()
func A(){
    pkgA.Test()
}
```
### 匿名引用
当包名出现重复时，除了为引用的包定义别名外，还可以使用关键字`.`,对于引用包的调用无需再指定包名。
```go
// 定义一个包A
package a

// 引用包c/a，并忽略其包名
import (
     . "c/a"
)

// 定义一个A方法，调用包c/a中的方法Test()
func A(){
    Test()
}
```

## package初始化
除了前面提过的`main`,在package中还有一个特殊的函数`init`。在引用包时，会首先执行`init`方法，因此该方法一般用于除了一些初始化逻辑。
```go
// 定义包a
package a

import (
    "fmt"
)

// 定义包初始化方法，在别的包引用到包a时，会首先执行该方法
func init() {
        fmt.Println("Initialize the package here")
}
```

### 初始化引用
如果你只想执行一下package的初始化方法，没有引用到其他。你可以用关键字`_`,声明只调用初始化
```go
// 引用包c/a,只调用到其中的init()方法
import (
     _ "c/a"
)
```