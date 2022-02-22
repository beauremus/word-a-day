import { Express, Request, Response } from 'express';
import UsersRoutes from './users';
import GamesRoutes from './games';
import LeaderBoardsRoutes from './leaderBoards';

export default function initRoutes(app: Express) {
    console.log(`INFO: Routes initialized`);

    app.get('/api', (req: Request, res: Response) => res.status(200).send({
        message: 'server is running!'
    }));

    UsersRoutes(app);
    GamesRoutes(app);
    LeaderBoardsRoutes(app);

    app.all('*', (req: Request, res: Response) => res.status(404).end());
}
