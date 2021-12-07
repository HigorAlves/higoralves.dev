import React from 'react'

import { render, screen } from '@testing-library/react'

import { Footer } from './Footer'

describe('Footer Component', () => {
	it('render the component', () => {
		render(<Footer />)
		const component = screen.getByTestId('footer')

		expect(component).toBeInTheDocument()
	})
})
