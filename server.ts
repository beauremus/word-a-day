import express, { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import routes from './controllers';

const PORT = 3000;

export class Server {

    private app: Express

    constructor() {
        this.app = express()

        // Express middleware
        this.app.set('view engine', 'pug')
        this.app.use(urlencoded({
            extended: true
        }));
        this.app.use(json());
        this.app.listen(PORT, () => {
            console.log(`INFO: Server successfully started at port ${PORT}`);
        });

        routes(this.app);
    }

    getApp() {
        return this.app
    }
}

new Server();
