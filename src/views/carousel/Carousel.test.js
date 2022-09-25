import { render, screen } from '@testing-library/react';
import Carousel from './Carousel'

describe('Component Carousel', () => {


    beforeAll(()=>{
        render(<Carousel />)
    })

    it('Render Component', () => {

        let elemento = screen.getByText(/Retro: Old is New Again/i)
        expect(elemento).toBeInTheDocument();
        
    })
})