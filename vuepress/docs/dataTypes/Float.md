# 浮点数/Float

浮点型表示带小数位的数字，或称浮点数。  
浮点型在内存中的表示包含三个部分：

- 符号位
- 指数位
- 有效数字位

| 类型    | 长度(byte) | 指数位(bit) | 有效数字位(bit) |
| ------- | :--------: | :---------: | :-------------: |
| float32 |     4      |      8      |       23        |
| float64 |     8      |     11      |       52        |

## 定义浮点型
例子： 定义浮点型

```go
var speed float32
speed = 35.75
height := 1.78
```

如果对浮点数进行匿名赋值的时候，默认会识别为 float64 类型

```go
speed := 35.75
// 等于
speed float64 := 35.75
```

## 精度问题
注意，跟其他语言一样，Go 的浮点型也不绝对精确

```go
func main() {
	var x, y = 3.1, 3.0
	fmt.Println(x-y == 0.1)
}
```

得到的结果会是`false`。  
## 手动实现精度比较
如果希望准确比较，我们可以声明一个函数，判断两者的差。只要两者差在精度容忍范围，就认为他们相等。

```go
func main() {
	var x, y float64 = 3.1, 3.0
  // 比较x-0.1 和 y，精度为0.1
	fmt.Println(IsEqual(x-0.1, y, 0.1))
}

func IsEqual(x float64, y float64, precision float64) bool {
  // 两者的差值只要小于精度，就认为两者相对。
	return math.Abs(x-y) < precision
}
```
