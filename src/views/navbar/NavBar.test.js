import { render, screen } from '@testing-library/react';
import NavBar from './NavBar'

describe('Component Navbar', () => {

    beforeAll(() => {
        render(<NavBar />)
    });

    it('Render component', () => {
        let elemento = screen.getByText(/trends/i);
        expect(elemento).toBeInTheDocument()
    });
    
})