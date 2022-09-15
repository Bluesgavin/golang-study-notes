# 项目结构

Go 目前并没有官方的项目结构，我们可以参考社区的常用结构

## 可执行项目（应用）结构
```
exe-layout
├── cmd/
│     ├──app1/
│     │    └── main.go
│     └──app2/
│          └── main.go
├── go.mod
├── go.sum
├── internal/
│     ├── pkga/
│     │    └── pkg_a.go
│     └── pkgb/
│          └── pkg_b.go
├── pkg1/
│    └── pkg1.go
├── pkg2/
│    └── pkg2.go
└── vendor/
```

## 库项目结构
```
lib-layout
│
├── go.mod
├── go.sum
├── internal/
│     ├── pkga/
│     │    └── pkg_a.go
│     └── pkgb/
│          └── pkg_b.go
├── pkg1/
│    └── pkg1.go
└── pkg2/
     └── pkg2.go
```

## 目录解释
- **cmd 目录**: 存放项目要编译构建的可执行文件所对应的 main 包的源码文件；
- **项目包(pkgN)**: 每个项目下的非 main 包都“平铺”在项目的根目录下，每个目录对应一个 Go 包；
- **internal 目录**：存放仅项目内部引用的 Go 包，这些包无法被项目之外引用；
- **vendor 目录**：这是一个可选目录，为了兼容 Go 1.5 引入的 vendor 构建模式而存在的。这个目录下的内容均由 Go 命令自动维护，不需要开发者手工干预。