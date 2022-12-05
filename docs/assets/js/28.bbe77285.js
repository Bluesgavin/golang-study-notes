(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{293:function(o,t,n){"use strict";n.r(t);var e=n(13),r=Object(e.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发"}},[o._v("#")]),o._v(" 并发")]),o._v(" "),t("p",[o._v("Go 的并发方案采用的是多线程的方式，并且始终把线程管理放在应用层面进行。带来的好处有：")]),o._v(" "),t("ul",[t("li",[o._v("资源占用小，每个 goroutine 的初始栈大小仅为 2k；")]),o._v(" "),t("li",[o._v("由 Go 运行时而不是操作系统调度，goroutine 上下文切换在用户层完成，开销更小；")]),o._v(" "),t("li",[o._v("在语言层面而不是通过标准库提供。 goroutine 由 go 关键字创建，一退出就会被回收或 销毁，开发体验更佳；")]),o._v(" "),t("li",[o._v("语言内置 channel 作为 goroutine 间通信原语， 为并发设计提供了强大支撑。")])]),o._v(" "),t("p",[o._v("Go 语言是面向并发而生的，所以，在程序的结构设 计阶段，Go 的惯例是优先考虑并发设计 。 这样做的目的更多是考虑随着外界环境的变化， 通过并发设计的 Go 应用可以更好地、 更自然地适应 "),t("strong",[o._v("规模化（scale")]),o._v(" 。")]),o._v(" "),t("p",[o._v("goroutine 是 Go 原生支持并发的一个具体实现。 无论是 Go 自身运行时 代码还是用户层 Go 代码，都无一例外地运行在 goroutine 中。")]),o._v(" "),t("p",[o._v("goroutine 的使用代价很低，Go 官方推荐多使用 goroutine。 而且，多数情况下， 我们不需要考虑对 goroutine 的退出进行控制： goroutine 的执行函数的返回，就意味着 goroutine 退出。 如果 main goroutine 退出了 ， 那么也意味着整个应用程序的退出。 此外，你还要注意的 是，goroutine 执行的函数或方法即便有返回值，Go 也会忽略这些返回值。 所以，如果你 要获取 goroutine 执行后的返回值，你需要另行考虑其他方法，比如通过 goroutine 间的通信来实现。")]),o._v(" "),t("h2",{attrs:{id:"goroutine间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goroutine间的通信"}},[o._v("#")]),o._v(" goroutine间的通信")]),o._v(" "),t("p",[o._v("传统语言的并发大多基于内存共享，而 Go 在设计之处就采用了一种新的设计模式：CSP（Communicationing Sequential Processes ， 通信顺序进程） 并发模型。"),t("br"),o._v("\nCSP 模型旨在简化并发程序的编写，让并发程序的编写与编写顺序程序一样简单。")]),o._v(" "),t("p",[o._v("一个符合 CSP 模型的并发程序应该是一组通过输入输出原语 连接起来的 P 的集合 。 从这个角度来看，CSP 理论不仅是一个并发参考模型，也是一种并 发程序的程序组织方法。 它的组合思想与 Go 的设计哲学不谋而合。")])])}),[],!1,null,null,null);t.default=r.exports}}]);