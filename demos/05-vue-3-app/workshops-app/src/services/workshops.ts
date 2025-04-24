import axios from 'axios'

const fetchWorkshops = async (page: number) => {
  const response = await axios.get(`/workshops`, {
    params: {
      _page: page,
    },
  })

  return response.data
}

// const fetchWorkshopById = async (page: number) => {
//   const response = await axios.get(`/workshops/2`, {
//     params: {
//       _page: page,
//     },
//   })

//   return response.data
// }

export { fetchWorkshops }
