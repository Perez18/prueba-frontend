import { render, screen } from '@testing-library/react';
import { CardLearnMore } from './CardLearnMore';

describe('Card Learn', () => {

    beforeAll(() => {
        render(<CardLearnMore />)
    })

    it('Render component', () => {

        let element = screen.getByText(/Learn more about/i);

        expect(element).toBeInTheDocument();
    })
})