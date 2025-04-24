import axios from 'axios'

type Level = 'Basic' | 'Intermediate' | 'Advanced'

interface ISession {
  id: number
  workshopId: number
  sequenceId: number
  name: string
  speaker: string
  duration: number
  level: Level
  abstract: string
  upvoteCount: number
}

const fetchSessionsForWorkshop = async (workshopId: number | string) => {
  const response = await axios.get<ISession[]>(`/workshops/${workshopId}/sessions`)

  return response.data
}

const voteFor = async (sessionId: number, voteType: 'upvote' | 'downvote') => {
  const response = await axios.put<ISession>(`/sessions/${sessionId}/${voteType}`)

  return response.data
}

export { fetchSessionsForWorkshop, voteFor }

export type { Level, ISession }
