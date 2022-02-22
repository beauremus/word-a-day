import { config } from 'dotenv';
import { Options } from 'sequelize';

config();

interface DbConfig {
    development: Options;
    production: Options;
    test: Options;
}

const options: DbConfig = {
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    },
    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    },
    test: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    },
};

export default options;
