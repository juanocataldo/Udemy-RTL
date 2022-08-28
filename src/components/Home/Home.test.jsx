import {render,screen,waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SmallCard } from '../SmallCard/SmallCard';
import { Home } from './Home';
import { server } from '../../mocks/server';
import { rest } from 'msw'

beforeEach(()=>{
    render(<Home />)
})


// FUNCTIONS
// -----------------------------------
// Populating fake images into gallery
const homePhotos = () => {
    let photos = []
    for (let i = 1; i < 6; i++) {
        photos.push(`_img${i}`)
    }
    return photos
}

describe('Testing Home section', () => {
    test('should have one informative banner with the "home_img" alt_name and one "top 3 players" img with "topThree_img" alt text', () => {
        const homeBanner = screen.getByAltText(/home_img/i);
        expect(homeBanner).toBeInTheDocument();

        const topThreePlayers = screen.getByAltText(/topthree_img/i)
        expect(topThreePlayers).toBeInTheDocument()
    });

    test('the top three image should have 3 small-cards of player', async () => {
        const topThree = await screen.findAllByAltText(/player$/i)
        expect(topThree).toHaveLength(3)        
    })

    test('should have one informative carousel', () => {
        const carousel = screen.getByText(/carousel/i)
        expect(carousel).toBeInTheDocument()
    })    

    test('should have a photo-gallery, with 5 images => alt: player_img1, player_img2 ...', () => {
        const imgsAltText = homePhotos()

        for (let i = 1; i < 6; i++) {
            const img = screen.getByAltText(`player_img${i}`)
            expect(img).toBeInTheDocument()            
        }
    })

    test('Should show an alert if there is no players in the top 3 section', async () => {
        //overwrite handlers to simulate error
        server.resetHandlers(
            rest.get('http://localhost:3030/toptres', (req, res, ctx) =>
            res(ctx.status(500))
            )
        )
        //Must re-render to simulate the error
        render(<Home />)
        await waitFor(async () => {
            const topThreeError = await screen.findByText(/no players were found/i)
            expect(topThreeError).toBeInTheDocument()
        })

    })
})
  