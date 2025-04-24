import { ref } from 'vue'

type Fetcher<T> = () => Promise<T>

const useFetch = <T>(initialData: T | null, fetcher: Fetcher<T>) => {
  // --- data ---
  const loading = ref(true)
  const data = ref<null | T>(initialData)
  const error = ref<null | Error>(null)

  const getData = async () => {
    loading.value = true

    try {
      const d = await fetcher()
      data.value = d
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  getData();

  // return everything that the components using useFetch() need to use
  return {
    loading,
    data,
    error,
    getData
  };
}

export default useFetch;

// mixin - for sharing common option (logic) in Vue

// {
//     data() {
//         return {

//         }
//     },
//     methods: {
//         x() {

//         }
//     },
//     computed: {
//      }
// }

