const { render, screen } = require("@testing-library/react")
const { default: NavBar } = require("./NavBar")

describe('Component Navbar', () => {

    beforeAll(() => {
        render(<NavBar />)
    });

    it('Render component', () => {
        let elemento = screen.getByText(/trends/i);
        expect(elemento).toBeInTheDocument()
    });
    
})