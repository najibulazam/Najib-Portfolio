import { render, screen } from '@testing-library/react'
import PrimaryButton from './PrimaryButton'

describe('PrimaryButton', () => {
  it('renders as anchor when href is provided', () => {
    render(<PrimaryButton href="https://example.com">Visit</PrimaryButton>)

    const link = screen.getByRole('link', { name: 'Visit' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders as button when href is not provided', () => {
    render(<PrimaryButton>Submit</PrimaryButton>)

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })
})
