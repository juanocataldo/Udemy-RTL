import { screen , render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../components/Home/Home";

beforeEach(() => render(<Home />))

describe('FILTERS Testing', () => {
    test('Should be 1 input with placeholder "Player Name".', () => {
        const playerName = screen.getByPlaceholderText(/player name/i)
        expect(playerName).toBeInTheDocument()
    })
    test('Should allow to filter by name.', async() => {
        const playerName = screen.getByPlaceholderText(/playername/i)
        // const playersListed = await screen.findAllByRole('listitem')
        const searchBtn = screen.getByRole('button', {name: /search/i})

        userEvent.type(playerName, 'franco')        
        userEvent.click(searchBtn)
        
        expect(await screen.findAllByRole('listitem')).toHaveLength(1)
    })
})