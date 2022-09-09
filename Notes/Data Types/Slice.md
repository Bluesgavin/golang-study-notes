# 切片/Slice

固定长度的数组在开发时，会带来很多的不便，因此，Go 为我们提供了解决办法——一个新的数据类型：切片。

切片是建立在数组之上的，你可以理解为是一个在数组上滑动的窗口。

## 定义

切片的定义与数组非常相似，区别就是切片的定义不需要指定长度。

```
var s1 []string
var s2 []int
```

## 创建

#### 基于数组创建

前面说到了切片需要建立在数组之上，我们就来看看如何建立一个切片。在建立切片时，我们需要用起始和结束序号声明这个切片在数组上的范围。必须要注意的是，我们声明的结束序号是不会被取到的，因此实际切片的访问是从起始序号到结束序号-1。

```
// 我们有一个数组 a1
var a1 [5]string = [5]string{"mike", "lili", "mary", "tony", "lucy"}
// 声明一个切片 s2
var s2 []string

s2 = s1[1:3]
	fmt.Println(s2)
  // [lili mary]

  // 起始序号可以省略，即为0
	s3 := s1[:3]
	fmt.Println(s3)
  // [mike lili mary]


  // 结束序号也可以省略，即默认取到数组结尾
	s4 := s1[2:]
	fmt.Println(s4)
  // [mary tony lucy]
```

#### 直接创建

如果每次创建切片都需要先创建一个数组，未免也太麻烦了。因此 Go 提供了一个直接创建切片的方法——利用内置的`make`方法

```
var s1 []string
// 通过内置方法make()创建切片，第一个参数表示切片类型，第二个参数表示切片中的元素长度，第三个参数表示切片可分配的空间大小
s1 = make([]string,5,10)

var s2 []int
// make方法可以省略第三个参数，在不指定的情况下切片的可分配总空间大小等于初始大小
s2 = make([]int,3)
```

值得注意的是，这种方式创建切片，本质上还是会创建对应的数组，只是 Go 在底层帮我们做了这个过程。对开发者是无感知的。

## 读写

与数组一样，切片通过序号读写其中的数据。

```
var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}

	// 读取切片下标为3的元素
	fmt.Println(s1[3])
  // tony

	// 修改切片下标为3的元素
	s1[3] = "mark"

	fmt.Println(s1[3])
  //mark
```

## 长度与容量

切片也有长度的概念，同时，它还有容量。
切片的长度是指自身的长度。而容量是值它对应的数组的长度，这也是切片的最大长度。
通过内置方法`len`和`cap`可以看到切片的长度与容量。

```
arr  := []int{1,2,3,4,5,6}
// 创建切片取前3个元素
s1 = arr[:3]
fmt.Println(s1, len(s1),cap(s1))
// [1 2 3 4] 4 6
```

## 追加

接下来的方法就是体系切片比数组强大的地方了，切片提供了如追加插入等操作方法。通过内置的`append`方法可以追加切片的内容,第一个参数是要进行追加的切片，后续的参数是要追加到切片中的元素。

```
s1 := make([]string, 6, 7)
s1 = append(s1, "append1")
fmt.Println(s1,len(s1),cap(s1))
// [      append1] 7 7

s1 = append(s1, "append2")
fmt.Println(s1,len(s1),cap(s1))
// [      append1 append2] 8 14
```

我们可以看到当追加时，如果切片的容器不够，切片会重新创建并指向一个更大的新数组，把旧数组的内容复制到新数组中，在新数组中追加元素，新数组的大小等于旧数组的大小翻倍。

注意！为了避免出现频繁的内存复制而导致的性能损耗，在创建切片时应当指定一个合适的可分配空间大小，在时间和空间上做取舍

## 合并

可以通过关键字...，将切片拆分为多个独立元素，将拆分后的元素传入 append()方法即可完成切片合并

```
var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}

	var s2 []string = []string{"milk", "checken", "egg"}

	// 将切片s2中的元素拆分追加到切片s1中
	s1 = append(s1, s2...)

	fmt.Println(s1)
  // [mike lili mary tony lucy milk checken egg]
```

## 插入

官方并没有提供内置的插入方法，但我们可以利用追加和合并的原理，自己实现。
插入元素到切片中的实现方式是将插入位置后半部的切片先临时保存，再为前半部的切片追加要插入的元素，最后追加临时保存的后半部切片

```
var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}
	var v1 = "trump"

	// 在切片s1的下标位置n插入元素v1
	n := 3
	tmp := append([]string{}, s1[n:]...)
	s1 = append(s1[:n], v1)
	s1 = append(s1, tmp...)

	fmt.Println(s1)
```

## 删除

切片本身并不能直接删除元素，而是通过 append()方法对切片进行重新赋值，其原理是将要删除的元素之后的部分合并到要删除的元素之前的部分，以此覆盖掉要删除的元素。

```
var n = 2
	var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}

	// 将下标n之后的元素追加到下标n之前的元素中，覆盖下标为n的元素
	s1 = append(s1[0:n], s1[n+1:]...)

	fmt.Println(s1)
  // [mike lili tony lucy]
```

## 复制

可通过内置方法 copy()，实现切片复制。在复制切片时，如果目标切片长度小于源切片长度，源切片中多出的部分会被忽略掉；如果目标切片长度大于源切片长度，目标切片多出的部分内容会保持不变。

```
var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}

	// 目标切片长度与源切片长度一致
	var s2 []string = make([]string, 5)
	copy(s2, s1)
	fmt.Println(s2)
  // [mike lili mary tony lucy]

	// 目标切片长度大于源切片长度
	var s3 []string = make([]string, 7)
	s3[5] = "maru"
	s3[6] = "bruce"
	copy(s3, s1)
	fmt.Println(s3)
  // [mike lili mary tony lucy maru bruce]

	// 目标切片长度小于源切片长度
	var s4 []string = make([]string, 3)
	copy(s4, s1)
	fmt.Println(s4)
  //[mike lili mary]
```

## 传递
切片中内置了指向数组的指针，对于切片的元素的读写是通过指针寻址到对应的源数组元素中进行读写的。在通过方法传参数时，虽然会重新在方法体中复制一个新的切片，但是新切片中的指针值是不变的，还是指向了原来的数组，因此在方法体内去修改切片的值，方法体外的切片值也会随着修改，两者指向的是同一个内存空间的数组。
```
package main

import (
	"fmt"
)

func main() {
	var s1 []string = []string{"mike", "lili", "mary", "tony", "lucy"}
	fmt.Println(s1)
  //[mike lili mary tony lucy]

	// 修改切片s1中下标为2的值为"mark"
	ChangeSlice(s1, 2, "mark")
	fmt.Println(s1)
  //[mike lili mark tony lucy]
}

// 定义一个方法，该方法的作用是为切片slice中下标为index的元素赋值value
func ChangeSlice(slice []string, index int, value string) {
	slice[index] = value
}
```