import {fireEvent, render, screen} from '@testing-library/react'
import Index from './pages/Home/index'

describe('Jest', () => {
    it('should render', () => {
        render(<Index />)
    })

    it('should call sing in on click', () => {
        const onClick = jest.fn();

        const button = screen.getByText('Sign in')

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })

    it('should call register on click', () => {
        const onClick = jest.fn();

        const button = screen.getByText('Register')

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})