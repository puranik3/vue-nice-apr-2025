import WorkshopsList from './WorkshopsList.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'
import workshops from '../mocks/data/workshops.json'

import { errorHandlers } from '@/mocks/handlers'
import server from '@/mocks/server'

describe('WorkshopsList on load', () => {
  beforeEach(() => {
    console.log('runs before an on load test runs')
  })

  // test()
  it('should show a loading spinner', () => {
    render(WorkshopsList)

    const loadingSpinnerEl = screen.getByTestId('loading-spinner')
    expect(loadingSpinnerEl).toBeInTheDocument()
  })

  it('should fetch and show the images for workshops fetched', async () => {
    render(WorkshopsList)

    for (let i = 0; i < 10; ++i) {
      const workshopImgEl = await screen.findByRole('img', {
        name: workshops[i].name
      })

      expect(workshopImgEl).toBeInTheDocument()
    }

    // Use queryBy*(), queryAllBy*() when you expect some element to not be in the DOM
    const loadingSpinnerEl = screen.queryByTestId('loading-spinner')
    expect(loadingSpinnerEl).not.toBeInTheDocument()
  })

  it('should show an error on load if fetch of workshops fails', async () => {
    server.use(...errorHandlers)

    render(WorkshopsList)

    const loadingSpinnerEl = screen.getByTestId('loading-spinner')
    expect(loadingSpinnerEl).toBeInTheDocument()

    const loadingErrorEl = await screen.findByTestId('loading-error')
    expect(loadingErrorEl).toBeInTheDocument()
  })
})
