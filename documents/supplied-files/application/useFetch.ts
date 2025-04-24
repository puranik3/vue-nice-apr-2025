import { onMounted, reactive, toRefs } from 'vue'

type Fetcher = <DataType>() => Promise<any> // @todo Improve this!

// A composable that fetches data from the given source (using the given `fetcher` function that makes the backend call and returns the data)
const useFetch = <DataType>(fetcher: Fetcher, initialData: DataType | null) => {
  // --- data ---
  const state = reactive({
    loading: true,
    error: null as null | Error,
    data: initialData
  })

  // -- methods --
  const fetchData = async () => {
    state.loading = true

    try {
      const data = await fetcher()

      // update data
      // observe that for data created using reactive(), there is no ".value" used to refer to or update the value
      state.data = data as any // @todo Improve this!
    } catch (error) {
      state.error = error as Error
    } finally {
      state.loading = false
    }
  }

  // -- lifecycle methods ---
  onMounted(fetchData)

  // --- ready the data to be passed back to the component ---
  // this wont work - when we destructure - the individual pieces ie. loading, error, data are not reactive - UI wont update
  // const { loading, error, data } = state;

  // using toRefs() will make these reactive as well
  const { loading, error, data } = toRefs(state)

  return {
    loading,
    error,
    data,
    fetchData // the component may need to fetch data at other times (apart from at the time of mount)
  }
}

export default useFetch
