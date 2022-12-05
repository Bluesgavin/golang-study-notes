# net/http

http 是 Go 的官方库之一，可以实现大部分 web 操作，许多 Go 的 Web 框架底层就是根据 http 包封装的。

更多信息，可以查看官方文档：[https://pkg.go.dev/net/http](https://pkg.go.dev/net/http)

## ListenAndServe

执行 http 包下的 ListenAndServe 方法，程序就会启动一个 Web 程序。用户可以通过传入自定义端口，控制 Web 程序监听的端口。

```go
func ListenAndServe(addr string, handler Handler) error
```

方法接受 2 个参数：

- addr: 监听端口,类型为 string
- handler：回调函数，默认为 http.DefaultServeMux

#### 使用

```go
func main() {
  if err := http.ListenAndServe(":8080", nil); err != nil {
      // 启动出错
	  panic(err)
  }
  fmt.Println("server started!")
}
```

## HandleFunc
HandleFunc 方法可以让我们处理来自某个 url 的具体请求。
```go
func HandleFunc(pattern string, handler func(ResponseWriter, *Request))
```
方法接受 2 个参数：

- pattern: 注册的URL,类型为 string
- handler：回调函数

#### 使用
```go
func main() {
  	h1 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "主页")
	}
	h2 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "endpoint页")
	}

	http.HandleFunc("/", h1)
	http.HandleFunc("/endpoint", h2)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## Request
通常每个进入 http 服务的请求都会生成一个 Request 实例。我们可以在实例中得到大部分业务需要的数据。
#### 示例
```go
func main() {
  h1 := func(w http.ResponseWriter, r *http.Request) {
    // 读取请求的method
    fmt.Println(r.Method)
    // 读取请求的body
    fmt.Println(r.Body)
    // 读取请求的url
    fmt.Println(r.URL.Path)
    io.WriteString(w, "主页")
  }

	http.HandleFunc("/", h1)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```