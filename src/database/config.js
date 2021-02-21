const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'xxxxx',
    user: 'xxxx',
    password: 'xxxx',
    database: 'xxxx',
    port: 'xxxx'
});

module.exports = connection;