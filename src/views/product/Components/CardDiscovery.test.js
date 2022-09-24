const { render } = require("@testing-library/react")
const { CardDiscovery } = require("./CardDiscovery")

describe('Card Discovery', () => {

    it('Render component', () => {

        let component = render(<CardDiscovery />);
        let element = component.getByText(/Discover your true style/i);

        expect(element).toBeInTheDocument();
    })
})