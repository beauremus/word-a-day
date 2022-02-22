import { Express, Request, Response } from 'express';
import { User } from '../models';

export default function routes(app: Express) {
    // TODO: This needs to only be signup and login.
    app.get('/api/appUsers', (req: Request, res: Response) => {
        return User.findAll({ include: [{ all: true }] })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(404).send(error));
    });
}
