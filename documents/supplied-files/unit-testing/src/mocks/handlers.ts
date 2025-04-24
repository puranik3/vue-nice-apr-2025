import { rest } from 'msw'
import workshops from './data/workshops.json'
import session from './data/session.json'

// const apiBaseUrl = 'http://localhost:8001'
const apiBaseUrl = 'https://workshops-server.onrender.com'

export const handlers = [
  rest.get(`${apiBaseUrl}/workshops`, (req, res, ctx) => {
    const page: number | string | null = +(
      req.url.searchParams.get('_page') || 0
    )

    if (page === 1) {
      console.log(workshops.slice(0, 10))
      return res(ctx.json(workshops.slice(0, 10)), ctx.status(200))
    }

    if (page === 2) {
      return res(ctx.json(workshops.slice(10, 20)), ctx.status(200))
    }

    if (page === null) {
      return res(ctx.json(workshops), ctx.status(200))
    }
  }),
  // more handlers...
  rest.get(`${apiBaseUrl}/workshops/2`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(workshops[1]))
  }),
  rest.post(`${apiBaseUrl}/sessions`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(session))
  })
]

export const errorHandlers = [
  rest.get(`${apiBaseUrl}/workshops`, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json(null))
  })

]
