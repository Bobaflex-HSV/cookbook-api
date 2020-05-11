const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD, //how to make your password invisible, ask before pushing to github
    port: process.env.PORT,
});

module.exports = pool;