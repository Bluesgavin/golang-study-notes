# 复合数字类型/Complex Numbers

复数包含两个部分，

- 实部
- 虚部

| 类型       | 长度(byte) | 实部长度(byte)  | 虚部长度(byte)  |
| ---------- | :--------: | :-------------: | :-------------: |
| complex64  |     8      | 4（同 float32） | 4（同 float32） |
| complex128 |     16     | 8（同 float64） | 8（同 float64） |

## 定义复数

可通过内置方法`complex()`定义复数，通过`real()`方法获取复数的实部，`imag()`获取复数的虚部

```go
package main

import (
	"fmt"
)

func main() {
	var v1 complex64
	v1 = 2.7 + 34i

	var v2 complex64
	// 使用内置方法complex(x,y)定义复数，x表示实部，y表示虚部
	v2 = complex(2.7, 34)

	fmt.Println(v1)
	// 通过内置方法real()获取复数实部，imag()获取复数虚部实数
	fmt.Println(real(v2), imag(v2))
}
```

输出结果

```
(2.7+34i)
2.7 34
```
