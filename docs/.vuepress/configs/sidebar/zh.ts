import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '指南',
      children: [
        '/README.md',
        '/page1.md',
      ],
    },
  ]
}