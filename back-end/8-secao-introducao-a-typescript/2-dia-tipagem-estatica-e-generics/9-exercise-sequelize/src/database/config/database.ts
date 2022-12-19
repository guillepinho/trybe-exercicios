require('dotenv').config();
import { Options } from 'sequelize';

console.log(process.env.DB_USER);


const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'books_api',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 6033,
  dialect: 'mysql',
};

export = config;