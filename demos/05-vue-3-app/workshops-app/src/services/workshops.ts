import axios from 'axios'

// union of type literals
type Category = 'frontend' | 'backend' | 'database' | 'language' | 'mobile' | 'devops'

interface ILocation {
  address: string
  city: string
  state: string
}

interface IModes {
  inPerson: boolean
  online: boolean
}

interface IWorkshop {
  name: string
  category: Category
  id: number
  description: string
  startDate: string
  endDate: string
  time: string
  location: ILocation
  modes: IModes
  imageUrl: string
}

const fetchWorkshops = async (page: number) => {
  const response = await axios.get<IWorkshop[]>(`/workshops`, {
    params: {
      _page: page,
    },
  })

  // return response.data as IWorkshop[]
  return response.data
}

const fetchWorkshopById = async (id: number | string) => {
  const response = await axios.get<IWorkshop>(`/workshops/${id}`)

  return response.data
}

export { fetchWorkshops, fetchWorkshopById }
export type { Category, ILocation, IModes, IWorkshop }
