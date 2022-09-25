import { render, screen } from '@testing-library/react';
import CardDiscovery from './CardDiscovery';

describe('Card Discovery', () => {

    beforeAll(() => {
        render(<CardDiscovery />)
    })

    it('Render component', () => {

        let element = screen.getByText(/Discover your true style/i);

        expect(element).toBeInTheDocument();
    })
})