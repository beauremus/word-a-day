import { Sequelize } from 'sequelize-typescript';
import { Game } from './Game';
import { Score } from './Score';
import { User } from './User';

export { Game, Score, User };

import _ from '../environment';
import config from '../config';

const dbConfig = config[process.env.NODE_ENV];
const sequelize = new Sequelize(
  dbConfig['database'] || 'testdb',
  dbConfig['username'] || 'testuser',
  dbConfig['password'] || 'testpassword',
  {
    models: [Game, Score, User],
    ...dbConfig
  }
);

export default sequelize;
