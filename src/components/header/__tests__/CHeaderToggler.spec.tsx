import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CHeaderToggler } from '../../../index'

test('loads and displays CHeaderToggler component', async () => {
  const { container } = render(<CHeaderToggler>Test</CHeaderToggler>)
  expect(container).toMatchSnapshot()
})

test('CHeaderToggler customize', async () => {
  const { container } = render(<CHeaderToggler className="bazinga">Test</CHeaderToggler>)
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('header-toggler')
})