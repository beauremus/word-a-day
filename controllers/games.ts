import { Express, Request, Response } from 'express';
import { Game } from '../models';

export default function routes(app: Express) {
    // TODO: To be implemented
    app.get('/api/game', (req: Request, res: Response) => {
        return Game.findOne({ include: [{ all: true }] })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(404).send(error));
    });
}
