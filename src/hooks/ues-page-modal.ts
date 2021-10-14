import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type callback = () => void
export function usePageModal(newCb: callback, editCb: callback) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewDate = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    newCb && newCb()
  }
  const handleEditDate = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    editCb && editCb()
  }

  return [pageModalRef, defaultInfo, handleNewDate, handleEditDate]
}
