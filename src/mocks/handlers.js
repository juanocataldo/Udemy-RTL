import {rest} from 'msw'

export const handlers = [
    rest.get('http://localhost:3030/toptres', (req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Juano', img: '', ranking:1 },
          { name: 'Cande', img: '' , ranking:2},
          { name: 'Carlos', img: '' , ranking:3},
        ])
      );
    })]