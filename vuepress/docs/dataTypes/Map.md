# 字典/Map

字典以`key-value`键值对的形式保存数据

## 定义字典

字典的定义用关键字`map`

```go
// 定义键类型为int，值类型为string的字典
var m map[int]string
```

## 字典初始化

字典同样可以用`make`创建

```go
// 定义一个键为字符串，值为字符串的字典m1
var m1 map[string]string
// 初始化字典m1
m1 = make(map[string]string)

// 定义一个键为字符串，值为整型切片字典m2
var m2 = make(map[string][]int)
```


## 字典读写
字典内容可动态增删，通过键名可对字典进行索引，做赋值或读取操作，使用len()方法可获取字典长度
```go
package main

import (
	"fmt"
)

func main() {
	var m1 map[string]string
	m1 = make(map[string]string)
	
	// 为字典赋值
	m1["key1"] = "value1"
	m1["key2"] = "value2"
	
	// 通过键名获取对应的值
	fmt.Println(m1["key2"])

	// 输出字典内容
	fmt.Println(m1)
	// 输出字典长度
	fmt.Println(len(m1))
}
```
输出结果
```
value2
map[key1:value1 key2:value2]
2
```
## 字典元素删除
通过内置方法`delete()`可以删除字典元素
```go
package main

import (
	"fmt"
)

func main() {
	var m1 map[string]string
	m1 = make(map[string]string)
	
	m1["key1"] = "value1"
	m1["key2"] = "value2"
	
	// 通过键名删除字典元素
	delete(m1,"key1")

	fmt.Println(m1)
	fmt.Println(len(m1))
}
```
输出结果
```
map[key2:value2]
1
```

## 字典传递
字典本身采用引用传递，它的变量值相当于一个指针。
```go
package main

import (
	"fmt"
)

func main() {
	m1 := make(map[string]string)
	m2 := m1
	m1["hello"] = "hi"
	fmt.Println(m2)
}
```
输出结果看到，m2也被改了，说明m2值是一个引用，不是m1的拷贝
```
map[hello:hi]
```