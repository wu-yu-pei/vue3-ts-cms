import { useStore } from '@/store'
export function usePermissions(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.Login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item) => item === verifyPermission)
}
