const connection = require('../database/config');
const queryExecuter = require('../helpers/queryExecuter');
module.exports = {
    insert(tipo) {
        return queryExecuter(connection, "INSERT INTO tipo_item (tipo) VALUES (?)", [tipo])
    },

    getAll() {
        return queryExecuter(connection, "SELECT * FROM `tipo_item`", [])
    },

    getById(id) {
        return queryExecuter(connection,'SELECT * FROM `tipo_item` WHERE id = ?', [id])
    },

    delete(id) {
        try {
            return queryExecuter(connection, 'DELETE FROM tipo_item WHERE id = ?', [id]);
        } catch (e) {
            throw e;
        }
    },

    update(data) {
        try {
            if (data) {
                const { id, tipo } = data;
                return queryExecuter(connection, 'UPDATE tipo_item SET tipo = ? WHERE id = ?', [tipo, id]);
            }
        } catch (e) {
            throw e;
        }
    }
}
