"use strict";
require('dotenv').config();
console.log(process.env.DB_USER);
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'g2u5i7g9a0',
    database: process.env.DB_NAME || 'books_api',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 6033,
    dialect: 'mysql',
};
module.exports = config;
