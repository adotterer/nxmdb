import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('MongoDB connects to Atlas and sets props in component', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})