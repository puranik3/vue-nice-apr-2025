import axios from 'axios'

const fetchWorkshops = async (page: number) => {
  const response = await axios.get(`https://workshops-server.onrender.com/workshop`, {
    params: {
      _page: page,
    },
  })

  return response.data
}

export { fetchWorkshops }
