import { onMounted, reactive, ref, unref } from "vue"
import { post } from "@/utils/http"

export function useHttp<T>(url: string, initialParams: any) {
    const dataList = ref<T[]>([])
    const loading = ref<boolean>(false)
    const totals = ref<number>(0)
    const pageInfo = reactive({ page: 1, pageSize: 10, })
    const loadData = async () => {
        loading.value = true;
        try {
            const { data: { list, total } } = await post(url, { ...unref(initialParams), ...pageInfo })
            dataList.value = list
            totals.value = total

        } catch (error) {

        } finally {
            loading.value = false;
        }
    }

    onMounted(() => {
        loadData()
    })

    const handleSizeChange = (size: number) => {
        pageInfo.pageSize = size;
        loadData()
    }

    const handleCurrentChange = (page: number) => {
        pageInfo.page = page;
        loadData()
    }

    const resetPagination = () => {
        pageInfo.page = 1;
        pageInfo.pageSize = 10;
        loadData()
    }

    const handleSearch = (params: any) => {
        pageInfo.page = 1;
        Object.assign(pageInfo, params)
        loadData()
    }

    return {
        dataList,
        loading,
        totals,
        pageInfo,
        loadData,
        handleSizeChange,
        handleCurrentChange,
        resetPagination,
        handleSearch,
    }
}