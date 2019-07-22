const mysql = require('mysql');
require('dotenv').config()

let con;

con = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql',
    logging: true,
    timezone: '+07:00',
    connectTimeout: parseInt(process.env.DB_CONNECTTIMEOUT)
});


/* istanbul ignore next */
con.connect(function (err){
    if(err) throw err;
});

module.exports = con;