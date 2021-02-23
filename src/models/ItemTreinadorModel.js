const connection = require('../database/config');
const queryExecuter = require("../helpers/queryExecuter");

module.exports = {
    insert(id_item, id_treinador) {
        return queryExecuter(
            connection,
            "INSERT INTO treinador_item (id_item, id_treinador) VALUES (?,?)",
            [id_item, id_treinador]
          );
    },

    getAll() {
        try {
          return queryExecuter(connection, "SELECT * FROM treinador_item", []);
        } catch (e) {
          throw e;
        }
    },

    getById(id) {
      try {
        return queryExecuter(
          connection,
          "SELECT * FROM treinador_item WHERE treinador_item.id =  ?",
          [id]
        );
      } catch (e) {
        throw e;
      }
    },
    delete(id) {
        try {
          return queryExecuter(connection, "DELETE FROM treinador_item WHERE treinador_item.id = ?", [id]);
        } catch (e) {
          throw e;
        }
      },
}
