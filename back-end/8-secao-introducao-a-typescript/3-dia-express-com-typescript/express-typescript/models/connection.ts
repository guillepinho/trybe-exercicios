import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv

import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_HOSTNAME);


export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.PORT),
});