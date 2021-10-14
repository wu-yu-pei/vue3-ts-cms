import { ref } from 'vue'
import PageContant from '@/components/page-contant'
export function usePageSearch() {
  const pageContantRef = ref<InstanceType<typeof PageContant>>()
  const resetData = () => {
    pageContantRef.value?.getPageData()
  }
  const searchData = (queryInfo: any) => {
    pageContantRef.value?.getPageData(queryInfo)
  }
  return [pageContantRef, resetData, searchData]
}
