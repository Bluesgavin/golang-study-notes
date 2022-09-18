(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{299:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常量-constant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量-constant"}},[s._v("#")]),s._v(" 常量/Constant")]),s._v(" "),t("p",[s._v("常量指不可修改的值，程序在编译阶段就可以知晓。Go 中的常量只局限于基本类型：数值、字符串、"),t("code",[s._v("true")]),s._v("和"),t("code",[s._v("false")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"定义常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义常量"}},[s._v("#")]),s._v(" 定义常量")]),s._v(" "),t("p",[s._v("常量的定义用关键字"),t("code",[s._v("const")])]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义常量PI，类型为float32，值是3.1415926")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" PI "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1415926")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同时定义多个常量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n  B "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"内置常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置常量"}},[s._v("#")]),s._v(" 内置常量")]),s._v(" "),t("p",[s._v("Go 中还预先定义了几个常量："),t("code",[s._v("true")]),s._v(","),t("code",[s._v("false")]),s._v("和"),t("code",[s._v("iota")]),s._v("\n其中"),t("code",[s._v("true")]),s._v("和"),t("code",[s._v("false")]),s._v("用于"),t("code",[s._v("bool类型")]),s._v("的取值\n"),t("code",[s._v("iota")]),s._v("是一个自增常量，其作用是在一个const定义域内，iota每出现一次，其自身的值会自增1，从0开始取值")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    None "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值0")]),s._v("\n    Monday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值1")]),s._v("\n    Tuesday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值2")]),s._v("\n    Wednesday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值3")]),s._v("\n    Thusday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值4")]),s._v("\n    Friday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值5")]),s._v("\n    Saturday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值6")]),s._v("\n    Sunday "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    c1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值0")]),s._v("\n    c2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值26")]),s._v("\n    c3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值52")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("如果在const定义域内的每个iota常量表达式是一样的，可以进行简写\n例子：定义简写自增常量")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    None "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值0")]),s._v("\n    Monday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值1")]),s._v("\n    Tuesday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值2")]),s._v("\n    Wednesday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值3")]),s._v("\n    Thusday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值4")]),s._v("\n    Friday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值5")]),s._v("\n    Saturday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值6")]),s._v("\n    Sunday "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    c1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值0")]),s._v("\n    c2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值26")]),s._v("\n    c3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取值52")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"用常量表示枚举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用常量表示枚举"}},[s._v("#")]),s._v(" 用常量表示枚举")]),s._v(" "),t("p",[s._v("Go 中没有枚举，通常用常量实现枚举效果")]),s._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    OrderDesc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desc"')]),s._v("\n    OrderAsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"asc"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    HTTPStatusCodeSucceed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n    HTTPStatusCodeUnauthorized "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v("\n    HTTPStatusCodeNotFound "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);