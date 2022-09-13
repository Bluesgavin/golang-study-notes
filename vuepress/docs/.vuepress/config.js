module.exports = {
  base:'/golang-study-notes/',
  title: 'Go 语言学习笔记',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '数据类型', // 必要的
        path: '/dataTypes/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: ['/dataTypes/Array.md', '/dataTypes/Slice.md'],
      },
      {
        title: '并发',
        path: '/concurrency/',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/concurrency/Goroutine.md', '/concurrency/Channels.md'],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};

