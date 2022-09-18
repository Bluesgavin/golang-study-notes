module.exports = {
  base: '/golang-study-notes/',
  title: 'Go语言学习笔记',
  description: 'Go 语言学习笔记',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/getStarted/install.md',
          '/getStarted/helloWorld.md',
          '/getStarted/package.md',
          '/getStarted/mod.md',
        ],
      },
      {
        title: '常用基础库',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/packages/fmt.md'],
      },
      {
        title: '语法',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/syntax/variation.md', '/syntax/constant.md'],
      },
      {
        title: '数据类型', // 必要的
        path: '/dataTypes/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          '/dataTypes/Integer.md',
          '/dataTypes/Float.md',
          '/dataTypes/ComplexNumbers.md',
          '/dataTypes/Boolean.md',
          '/dataTypes/Strings.md',
          '/dataTypes/Array.md',
          '/dataTypes/Slice.md',
          '/dataTypes/Map.md',
          '/dataTypes/Type.md',
          '/dataTypes/Struct.md',
          '/dataTypes/If.md',
          '/dataTypes/Switch.md',
          '/dataTypes/For.md',
        ],
      },
      {
        title: '并发',
        path: '/concurrency/',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/concurrency/Goroutine.md', '/concurrency/Channels.md'],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
      {
        title: '工程开发',
        path: '/development/',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/development/structure.md'],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
