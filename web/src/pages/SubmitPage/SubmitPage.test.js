import { render } from '@redwoodjs/testing'

import SubmitPage from './SubmitPage'

describe('SubmitPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitPage />)
    }).not.toThrow()
  })
})
