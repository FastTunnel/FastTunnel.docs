import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-4229fb60","/page1.html","页面1",["/page1","/page1.md"]],
  ["v-8daa1a0e","/","首页",["/index.html","/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
