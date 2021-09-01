export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "首页",
    "description": "FastTunnel使用手册"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "章节1.1",
      "slug": "章节1-1",
      "children": [
        {
          "level": 3,
          "title": "章节1.1.1",
          "slug": "章节1-1-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "章节1.2",
      "slug": "章节1-2",
      "children": []
    },
    {
      "level": 2,
      "title": "章节2.1",
      "slug": "章节2-1",
      "children": []
    },
    {
      "level": 2,
      "title": "章节2.2",
      "slug": "章节2-2",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
