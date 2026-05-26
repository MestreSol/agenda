import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app menu item', () => {
  render(<App />)
  const menuItem = screen.getByText(/add contact/i)
  expect(menuItem).toBeTruthy()
})
