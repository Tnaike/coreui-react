import * as React from 'react'
import { render /* ,screen */ /*,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CFormSelect } from '../../../index'

test('loads and displays CFormSelect component', async () => {
  const { container } = render(<CFormSelect></CFormSelect>)
  expect(container).toMatchSnapshot()
})

test('CFormSelect customize', async () => {
  const { container } = render(
    <CFormSelect className="bazinga" size="lg">
      <option value="A">B</option>
      <option>C</option>
    </CFormSelect>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('form-select')
  expect(container.firstChild).toHaveClass('form-select-lg')
})