const { render} = require("@testing-library/react")
const { default: NavBar } = require("./NavBar")

describe('Component Navbar', () => {

    it('Render component', () => {
        let component = render(<NavBar />)
        let elemento = component.getByText(/trends/i);
       expect(elemento).toBeInTheDocument()

    })
})