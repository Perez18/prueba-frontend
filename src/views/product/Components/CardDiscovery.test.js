const { render, screen } = require("@testing-library/react")
const { CardDiscovery } = require("./CardDiscovery")

describe('Card Discovery', () => {

    beforeAll(() => {
        render(<CardDiscovery />)
    })

    it('Render component', () => {

        let element = screen.getByText(/Discover your true style/i);

        expect(element).toBeInTheDocument();
    })
})