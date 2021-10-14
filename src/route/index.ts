import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '../utils/cache'
import { mapMenusToRoutes } from '@/utils/mapmenus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    // 默认进入这个里面
    component: () => import('../views/main/index.vue'),
    redirect: LocalCache.get('userMenus')?.[0].children[0].url
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  const token = LocalCache.get('token')
  if (to.path !== '/login') {
    if (!token) {
      console.log(1)
      return '/login'
    } else {
      mapMenusToRoutes(LocalCache.get('userMenus')).forEach((route) =>
        router.addRoute('main', route)
      )
    }
  }
})
export default router
