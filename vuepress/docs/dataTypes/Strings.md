# 字符/Strings

## 基础字符

Go 中把为基础字符提供了两个数据类型：`byte` 和 `rune`。字符我们用单引号表示。
| 类型 | 长度(byte) | 编码 |
| ---------- | :--------: | :-------------: |
| byte| 1(同 uint8) | UTF-8|
|rune| 4(同 uint32) | Unicode|

### 定义字符

```go
var c1 byte = 'a'
var c2 rune = '中'
```

## 字符串

字符串是我们更常用的字符类型，用双引号表示。默认情况下，字符串用`UTF-8`编码。

## 定义字符串

字符串的定义用关键字`string`

```go
var name string = "john"
```

## 无法修改字符

字符串的值是一体的，我们无法单独修改字符串中的某个字符，只能整体重新赋值。

```go
var name string = "many"
name = "mary"
```

## 手动实现替换字符

当然有时候，我们真的需求替换某个字符。我们可以手动实现这个效果，本质是利用切片操作再进行类型转换。

```go
package main

import (
    "fmt"
)

func main() {
    var s1 = "hello 你好"
    // 把s1 转换为byte切片
    var s2 = []byte(s1)
    // 把s1 转换为rune切片
    var s3 = []rune(s1)

    // 修改s1中下标0的值
    s2[0] = 'k'
    // 修改s2中下标6的值
    s3[6] = '我'

    // 用string把切片转回字符
    fmt.Println(string(s2))
    fmt.Println(string(s3))
}
```

输出结果

```
kello 你好
hello 我好
```

## 与整型的转换

内置包 strconv 中封装了关于字符串转换的方法，可通过方法 Atoi()将字符串转为整型，通过方法 Itoa()将整型转换为字符串。

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	// 将字符串"2"转换为整型
  var v1 int
	v1, _ = strconv.Atoi("2")
	fmt.Println(v1)

	// 将整型值3转换为字符串
	var v2 string = strconv.Itoa(3)
	fmt.Println(v2)
}
```

输出结果

```
2
3
```

## 与其他类型的转换
也可以通过`ParseXXX()`将字符串转换为其他类型的变量，通过`FormatXXX()`将其他类型的变量转换为字符串（XXX代指类型）。
```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	var v1 bool
	// 将字符串转换为布尔型
	v1, _ = strconv.ParseBool("true")
	fmt.Println(v1)

	var v2 float64
	// 将字符串转换为浮点型，第二位参数为浮点型数的位数
	v2, _ = strconv.ParseFloat("2131.393", 64)
	fmt.Println(v2)

	var v3 int64
	// 将字符串换算为整型，第二位参数表示以多少位进制进行换算，第三位为换算后的数值位数
	v3, _ = strconv.ParseInt("-116", 10, 64)
	fmt.Println(v3)

	var v4 uint64
	// 将字符串换算为无符号整型，第二位参数表示以多少位进制进行换算，第三位为换算后的数值位数
	v4, _ = strconv.ParseUint("23", 10, 64)
	fmt.Println(v4)

	var v5 string
	// 将布尔型转换为字符串
	v5 = strconv.FormatBool(false)
	fmt.Println(v5)

	var v6 string
	// 将浮点型转换为字符串，第二位参数表示输出格式，'f'为普通显示方式，取小数点后的位数做为精确位数，'e'与'E'为指数形式，'g'与'G'以有效数字位数做为精确位数，第三位表示数值精确位数，第四位表示数值所占空间位数
	v6 = strconv.FormatFloat(3.141592679, 'f', 6, 64)
	fmt.Println(v6)

	var v7 string
	// 将布尔型转换为整型
	v7 = strconv.FormatInt(-667434, 10)
	fmt.Println(v7)

	var v8 string
	// 将布尔型转换为整型
	v8 = strconv.FormatUint(32434, 10)
	fmt.Println(v8)
}
```
输出结果
```
true
2131.393
-116
23
false
3.141593
-667434
32434
```