import { ref, reactive, toRefs } from 'vue'

type Fetcher<T> = () => Promise<T>

type State<T> = {
  loading: boolean
  data: T | null
  error: null | Error
}

const useFetch = <T>(initialData: T | null, fetcher: Fetcher<T>) => {
  // --- data ---
  // const loading = ref(true)
  // const data = ref<null | T>(initialData)
  // const error = ref<null | Error>(null)
  const state = reactive<State<T>>({
    loading: true,
    data: initialData,
    error: null,
  })

  // const { loading, data, error } = toRefs( state );

  const getData = async () => {
    state.loading = true

    try {
      const d = await fetcher()
      state.data = d as any
    } catch (err) {
      state.error = err as Error
    } finally {
      state.loading = false
    }
  }

  getData()

  const { loading, data, error } = toRefs(state)

  // return everything that the components using useFetch() need to use
  return {
    loading,
    data,
    error,
    getData,
  }
}

export default useFetch

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
