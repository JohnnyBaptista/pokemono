const connection = require('../database/config');
const queryExecuter = require('../helpers/queryExecuter');
module.exports = {
    insert(id_desafiado, id_desafiante, id_vencedor) {
        return queryExecuter(connection, "INSERT INTO batalha (id_desafiado, id_desafiante, id_vencedor) VALUES (?, ?, ?)", [id_desafiado, id_desafiante, id_vencedor])
    },

    getAll() {
        return queryExecuter(connection, "SELECT * FROM batalha", [])
    },

    getById(id) {
        return queryExecuter(connection, "SELECT * FROM batalha WHERE id = ?", [id])
    },

    delete(id) {
        try {
            return queryExecuter(connection, "DELETE FROM batalha WHERE id = ?", [id]);
        } catch(e) {
            throw e;
        }
    }
}