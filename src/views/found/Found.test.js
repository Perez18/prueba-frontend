import { render, screen } from '@testing-library/react';
import Found from './Found'

describe('Component Found', () => {

    beforeAll(() => {
        render(<Found />)
    });

    it('Render component', () => {
        let elemento = screen.getByText(/Found in over/i);
        expect(elemento).toBeInTheDocument()
    });
    
})