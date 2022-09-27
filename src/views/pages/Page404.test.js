import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './Page404'

describe('Component Page404', () => {

    beforeAll(() => {
        render(
            <BrowserRouter>
                <Page404 />
            </BrowserRouter>
        )
    });

    it('Render component', () => {
        let elemento = screen.getByText(/404/i);
        expect(elemento).toBeInTheDocument()
    });

})