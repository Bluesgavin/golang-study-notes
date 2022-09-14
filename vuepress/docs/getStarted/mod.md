# 模块管理/module maintenance
前面说到了package是 Go 中的一个基础单位。但当我们开发一个应用时，一定会用到很多 package，此时，如果管理 package 就成了一个问题了。

## go mod
go 提供了一个模块管理命令。
```bash
go mod xxx
```
可以执行帮助命令获取，命令详细信息
```bash
go help mod
```


## 创建模块
我们可以在希望创建为模块的路径下执行以下命令：
```bash
go mod init 【module名称】
# 也可以省略module名称，如果省略会默认使用当前文件夹名
go mod init
```
执行之后,当前目录下会创建一个`go.mod`文件，内容如下：
```
module {{ module名称 }}

go {{ golang版本 }}
```

## 引用第三方package
如果只用Go的基础库，那么只需在代码中直接`import`即可。但如果用到第三方库，我们需要先从外网下载库，并使用。          
### 从公共库搜索package
Go 提供了一个官方packages库，我们可以在上面搜索需要的package。地址：[https://pkg.go.dev/](https://pkg.go.dev/)                
搜索到结果之后，可以点击进入查看 package 的文档。如果确认使用该package，可以复制文档页顶部提供的复制按钮。如我现在要引用的是`quote`包，复制得到的结果为：
```
rsc.io/quote/v4
```

### 引用方法1：先import
接下来，我们可以正式引用这个package了。其中一个方法是先在代码中`import`该package
```
import "rsc.io/quote/v4"
```
然后执行命令
```
go mod tidy
```
执行命令之后，Go会扫描当前模块下的所有代码找到import。如果import 引用到的package没有在`go.mod`中注明，会帮我们自动写入`go.mod`并下载。相反如果`go.mod`中注明的package，在代码中没有用到，就会在`go.mod`中去除。

### 引用方法2：先下载package
你也可以反过来，先在`go.mod`中注明需要用到的package。
```
//go.mod
require rsc.io/quote/v4 v4.0.1
```
执行命令下载依赖
```
go get -u -v
```
执行之后会下载依赖，然后在对应的代码中`import`即可。

## 模块运行
运行模块的命令为：
```
go run .
```
注意，运行模块时，入口必须为 `package main`。 执行后，go会自动搜索main入口，并运行程序。
