import { Express, Request, Response } from 'express';
import { Score } from '../models';

export default function routes(app: Express) {
    // TODO: To be implemented
    app.get('/api/allTimeLeaders', (req: Request, res: Response) => {
        return Score.findAll({ include: [{ all: true }] })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(404).send(error));
    });
    app.get('/api/monthlyLeaders', (req: Request, res: Response) => {
        return Score.findAll({ include: [{ all: true }] })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(404).send(error));
    });
    app.get('/api/dailyLeaders', (req: Request, res: Response) => {
        return Score.findAll({ include: [{ all: true }] })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(404).send(error));
    });
}
