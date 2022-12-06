(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{308:function(a,s,t){"use strict";t.r(s);var r=t(13),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"变量-variation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量-variation"}},[a._v("#")]),a._v(" 变量/Variation")]),a._v(" "),s("h2",{attrs:{id:"变量声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[a._v("#")]),a._v(" 变量声明")]),a._v(" "),s("p",[a._v("Go 中声明变量用的关键词为"),s("code",[a._v("var")]),a._v("。实际语句为")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 声明一个类型为int的变量n")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v("\n")])])]),s("h2",{attrs:{id:"变量赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[a._v("#")]),a._v(" 变量赋值")]),a._v(" "),s("p",[a._v("变量的赋值直接用"),s("code",[a._v("=")]),a._v("即可")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 给变量n赋值为10")]),a._v("\nn "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("h2",{attrs:{id:"初始化赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化赋值"}},[a._v("#")]),a._v(" 初始化赋值")]),a._v(" "),s("p",[a._v("也可以在声明变量时，给变量设置初始值。")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("h2",{attrs:{id:"类型推断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[a._v("#")]),a._v(" 类型推断")]),a._v(" "),s("p",[a._v("在初始化赋值中，你甚至可以不显式声明类型，Go 会自动根据赋的值判断变量类型")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Go 会把n 认为是int类型")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("h2",{attrs:{id:"声明简写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明简写"}},[a._v("#")]),a._v(" 声明简写")]),a._v(" "),s("p",[a._v("Go还为我们提供了一种简单的写法——"),s("code",[a._v(":=")]),a._v(" 。注意不能省略"),s("code",[a._v(":")]),a._v("号。")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 以下写法跟上方一模一样")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("h2",{attrs:{id:"常见规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见规范"}},[a._v("#")]),a._v(" 常见规范")]),a._v(" "),s("p",[a._v("虽然我们提了很多变量的命名方式，但在社区中目前有一套常见的规范。建议大家还是按规范来比较好。")]),a._v(" "),s("h2",{attrs:{id:"全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[a._v("#")]),a._v(" 全局变量")]),a._v(" "),s("p",[a._v("全局变量是指直接声明在package下，不是某个函数专用的变量。全局变量必须用"),s("code",[a._v("var")]),a._v("声明。"),s("br"),a._v("\n如果变量没有有初始值，我们要在声明时带上类型。")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int32")]),a._v("\n")])])]),s("p",[a._v("如果变量有初始值，根据是否使用默认类型，分了两种写法：")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 不使用默认类型")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 使用默认类型")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("h2",{attrs:{id:"局部变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部变量"}},[a._v("#")]),a._v(" 局部变量")]),a._v(" "),s("p",[a._v("局部变量通常是函数里，或者具体某代码块中的变量。"),s("br"),a._v("\n同样，如果变量没有有初始值，我们要在声明时带上类型。")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v("  a "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int32")]),a._v("\n")])])]),s("p",[a._v("如果变量有初始值，根据是否使用默认类型，分了两种写法,局部变量中我们推荐用简写")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);