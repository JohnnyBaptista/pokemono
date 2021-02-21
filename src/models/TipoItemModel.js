const { store } = require('../controllers/TreinadorController');
const connection = require('../database/config');
module.exports = {
    insert(tipo) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO tipo_item (tipo) VALUES (?)", [tipo], (err, result) => {
                if (err) reject(err)
                resolve(result);
            })
        })
    },

    getAll() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM `tipo_item`", (err, result) => {
                if (err) reject(err)
                resolve(result);
            })
        })
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `tipo_item` WHERE id = ?', [ id ], (err, result) => {
                if (err) reject(err)
                resolve(result);
            })
        })
    }
}