const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '157.230.229.199',
    user: 'root',
    password: '123batmanFC',
    database: 'pokemono',
    port: '3306'
});

module.exports = connection;