# 模块管理/module maintenance

前面说到了 package 是 Go 中的一个基础单位。但当我们开发一个应用时，一定会用到很多 package，此时，如果管理 package 就成了一个问题了。

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

## 引用第三方 package

如果只用 Go 的基础库，那么只需在代码中直接`import`即可。但如果用到第三方库，我们需要先从外网下载库，并使用。

### 从公共库搜索 package

Go 提供了一个官方 packages 库，我们可以在上面搜索需要的 package。地址：[https://pkg.go.dev/](https://pkg.go.dev/)  
搜索到结果之后，可以点击进入查看 package 的文档。如果确认使用该 package，可以复制文档页顶部提供的复制按钮。如我现在要引用的是`quote`包，复制得到的结果为：

```
rsc.io/quote/v4
```

### 引用方法 1：先 import

接下来，我们可以正式引用这个 package 了。其中一个方法是先在代码中`import`该 package

```go
import "rsc.io/quote/v4"
```

然后执行命令

```bash
go mod tidy
```

执行命令之后，Go 会扫描当前模块下的所有代码找到 import。如果 import 引用到的 package 没有在`go.mod`中注明，会帮我们自动写入`go.mod`并下载。相反如果`go.mod`中注明的 package，在代码中没有用到，就会在`go.mod`中去除。  
执行后可以看到`go.mod`中多了下列内容：

```
require (
   rsc.io/sampler v1.3.0 // indirect
)
```

并且同目录下多了一个`go.sum`文件，这个文件记录了 hellomodule 的直接依赖和间接依赖包的相关版本的 hash 值，用来校验本地包的真实性。在构建的时候，如果本地依赖包的 hash 值与 go.sum 文件中记录的不一致，就会被拒绝构建。

### 引用方法 2：先下载 package

你也可以反过来，先在`go.mod`中注明需要用到的 package。

```bash
//go.mod
require rsc.io/quote/v4 v4.0.1
```

执行命令下载依赖

```bash
go get -u -v
```

执行之后会下载依赖，然后在对应的代码中`import`即可。

## 模块运行

运行模块的命令为：

```shell
go run .
```

注意，运行模块时，入口必须为 `package main`。 执行后，go 会自动搜索 main 入口，并运行程序。
