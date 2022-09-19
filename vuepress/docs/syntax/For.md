# 循环/For

在 Go 中循环只有一种形式，就是`For`。

## 语法格式

for 循环语句中包含 3 个部分，初始化语句，条件判断语句和循环标记语句  
初始化语句在进入 for 循环体前执行，用于初始化循环用的变量，只执行一次  
条件判断语句在每轮循环开始前执行，当条件成立时才会继续执行循环体中的内容，否则跳出循环  
循环结尾语句在每轮循环的结尾执行，主要用于为条件判断语句中的变量进行赋值

```go
for 初始化语句;条件判断语句;循环结尾语句 {
    ...
}

for i := 0;i<10;i++{
	// ...
}
```

## 省略写法

开发时，for 循环中除了条件判断语法，其他部分是可以省略的。

```go
// 省略循环结尾部分
for i := 0;i<10{
	i++;
}
// 省略初始部分
i:=0
for ;i<10;i++{
	// ...
}

// 只保留判断部分
i:= 0
for ;i<10;{
	//..
}
```

记住，但我们使用省略写法时，一定要保留`;`号，否则 Go 是无法区分他们的。但存在一个情况，是可以省略`;`的。就是只保留判断部分时。

```go
// 只保留判断部分
i:= 0
for i<10{
	//..
}
```

## white 循环

由于 Go 中只有`for`一种循环方式，当我们想要实现`white`时，只要利用`for`就可以了。

```go
// 相当于white
for {

}
// 效果同上
for true{

}
// 效果同上
for ;;{

}
```

虽然上面三种方式都能实现`white`的效果，但一般还是推荐第一种。

## range 关键字

如果我们想要遍历一个切片，最直观的方式应该是：

```go
func main() {
	s1 := []string{"mike", "lili", "mary", "tony", "lucy"}
	length := len(s1)
	for i := 0; i < length; i++ {
		fmt.Println(s1[i])
	}
}
```

但如果每次都这样遍历切片就太麻烦了。为此，Go 为我们提供了 `range` 关键字。使用它我们可以快速遍历一个切片

```go
func main() {
	s1 := []string{"mike", "lili", "mary", "tony", "lucy"}
	// i 是切片项的索引，v是项的值。
	for i,v := range s1 {
		fmt.Println(i,v)
	}
}
```

## 遍历切片

利用`range`我们已经可以很好地遍历切片了。我们甚至可以省略部分内容：

```go
// 不需要索引
for _,v := range s1{

}
// 不需要值
for i := range s1{

}
// 都不需要
for  range s1{

}
```

## 遍历字符
```go
var s = "hello"
for i,v := range s{
	fmt.Println(i,v)
}
```
输出结果：
```
0 h
1 e
2 l
3 l
4 o
```
可以看到，当遍历字符时，v会得到一个Unicode字符，i则是该字符的序列。

## 遍历字典
遍历字典的方式与遍历切片相似，但字典中没用序号,有的是key值。
```go
var m := map[string]int{
  "tom":18,
  "john":20
}

for k,v:= range m{
  Println(k,v)
}
```
输出结果
```
tom 18
john 20
```
变量map时，我们可以拿到字典每项的key和value值。

## 遍历信道
除了上面常见的类型遍历，range还可以与信道(channel)配合使用。
```go
var c = make(channel int)
for v:= range c{
  // ...
}
```
这样需要注意，每次遍历时，for循环会从信道中取一项进行。当信道中没有数据时，遍历会阻塞，但不会停止。只有当channel关闭之后，循环才会真正结束。

## 主动退出遍历
那么我们是不是只能等到判断条件为`false`时，才能结束循环呢？当然不是，Go 为我们提供了一些关键语句，可以让我们主动停止/跳出循环。
### continue语句
cotinue的作用是提前跳出当前这一次的循环，进入下一次循环。
```go
var sum := int
var sl = []int{1,2,3,4,5,6}
for i:= 0; i<len(sl);i++{
  if sl[i]%2 == 0 {
    // 如果项是偶数就跳出
    continue
  }  
  sum += sl[i]
}
Println(sum)
```
输出结果为切片中奇数的和，偶数被忽略了。
```
9
```
### 带label的continue
Go 中continue增加了对 `label` 的支持。label可以标记跳转目标，通常用于循环嵌套时，可以指定跳出的是哪一层的循环。
```go
var sl = [][]int{
  {1,34,26,35,78},
  {3,45,13,24,99},
  {101,13,38,7,127},
  {54,27,40,83,81},
}

//给外层循环打label
outerloop:
    for i:=0;i<len(sl);i++{
      for j:=0;j<len(sl[i]);j++ {
        if sl[i][j]==13 {
          fmt.Printf("found13at[%d,%d]\n",i,j) 
          // 跳出我们标记的label对应的循环
          continue outerloop
        }
      }
    }
```
上方例子中，假如不使用label，执行`continue`时，默认会跳出最里层的循环。而通过 `label` 我们可以精确地跳出外层循环。


### break 语句
continue的作用是跳出当前循环中的某一次循环执行，但如果我们想结束整个循环时，就需要用到 `break` 。
```go
var sl=[]int{5,19,6,3,8,12} 
var firstEven int=-1
//找出整型切片sl中的第一个偶数
for i:=0;i<len(sl);i++ {
  if sl[i]%2==0 {
      firstEven=sl[i]
      break
    }
  }
  println(firstEven)
```
输出结果,这里的代码当遍历到6时，后续的遍历是不会再进行的，此时循环已经结束了。
```
6
```
### 带 label 的 break 语句
与continue一样，break也支持label
```go
var sl=[][]int {
  {1,34,26,35,78},
  {3,45,13,24,99},
  {101,13,38,7,127},
  {54,27,40,83,81},
}
outerloop:
  for i:=0;i<len(sl);i++{
    for j:=0;j<len(sl[i]);j++{
      if sl[i][j]==gold{
        fmt.Printf("foundgoldat[%d,%d]\n",i,j)
        break outerloop
      }
    }
  }
```