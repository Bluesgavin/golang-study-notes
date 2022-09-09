# 数组/Array

## 声明

数组是一种数据类型的集合，有固定的长度。在声明时，需要先确定好数组的长度，且必须用常量。

```
// 声明数组
var s1 [32]byte
var s2 [22]int

// 数组可以嵌套数组，也就是多维数组
var s1 [23][34]bool
```

数组内的每个数据都有自己对应的序号，从 0 开始。你可以在定义数组时，给其设置初始值。

```
var s1 [5]string = [5]string{"mike","mary","tony","lucy","gigi"}
```

也可以通过序号，准确地设置初始值。

```
var s2 [5]string = [5]string{0:"mike",3:"mary",2:"tony",1:"lucy",4:"gigi"}
```

## 访问

通过序号可以访问数组内的数据。

```
var s1 [3]string = [3]string{"a","b","c"}
fmt.Println(s1[1])

// "b"
```

## 修改/写入
同样地，通过序号可以修改、写入数组数据。
```
var s1 [3]string = [3]string{"a","b","c"}
s1[2] = "d"
fmt.Println(s1)

// [a b d]

var s2 [3]string
s2[1] = "d"
fmt.Println(s1)

// [ d ]
```

## 获取长度
通过内置方法`len()`可以获取数组的定义长度。
```
var s1 [3]string = [3]string{"a","b","c"}
length:= len(s1)
fmt.Println(length)
// 3
```
