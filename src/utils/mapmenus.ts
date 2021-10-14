import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(usermenus: any) {
  // 动态添加进去的路由
  const routes: RouteRecordRaw[] = []
  // 文件里所有的路由
  const allRoutes: RouteRecordRaw[] = []

  const RouteFile = require.context('../route/main', true, /\.ts/)

  RouteFile.keys().forEach((key) => {
    const route = require('../route/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  setmenu(usermenus)

  function setmenu(usermenus: any) {
    for (const item of usermenus) {
      if (item.type === 2) {
        const usermenu = allRoutes.find((iteminfo) => {
          return iteminfo.path === item.url
        })
        if (usermenu) {
          routes.push(usermenu)
        }
      } else {
        setmenu(item.children)
      }
    }
  }

  return routes
}

export function mapMenuToCurrentMenu(
  usermenus: any,
  currentMenu: any,
  bread?: any[]
): any {
  for (const menu of usermenus) {
    if (menu.type === 1) {
      const find = mapMenuToCurrentMenu(menu.children, currentMenu)
      if (find) {
        bread?.push({ name: menu.name, path: menu.url })
        bread?.push({ name: find.name, path: find.url })
        return find
      }
    } else if (menu.type === 2 && menu.url === currentMenu) {
      return menu
    }
  }
}

export function mapBread(usermenus: any, currentMenu: any): any {
  const breads: any[] = []
  mapMenuToCurrentMenu(usermenus, currentMenu, breads)
  return breads
}

export function mapMenuToPermissions(usermenus: any) {
  const permissions: string[] = []
  const _recurseGetPermissions = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(usermenus)
  return permissions
}
