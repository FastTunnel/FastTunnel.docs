import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/config-https.md',
        '/guide/config-auto-start.md',
        '/guide/blogs.md',
        '/guide/contribute.md'
      ],
    },
  ]
}