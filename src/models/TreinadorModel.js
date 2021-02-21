const connection = require("../database/config");
const queryExecuter = require("../helpers/queryExecuter");

module.exports = {
  insert(data) {
    try {
      if (data) {
        const { name, city, email, password, exp, genre } = data;
        return queryExecuter(
          connection,
          "INSERT INTO treinador (nome, cidade, email, senha, exp, genero) VALUES (?, ?, ?, ?, ?, ?)",
          [name, city, email, password, exp, genre]
        );
      }
    } catch (e) {
      throw e;
    }
  },

  getAll() {
    try {
      return queryExecuter(connection, "SELECT * FROM treinador", []);
    } catch (e) {
      throw e;
    }
  },

  get(id) {
    try {
      return queryExecuter(
        connection,
        "SELECT * FROM treinador WHERE treinador.id =  ?",
        [id]
      );
    } catch (e) {
      throw e;
    }
  },
};
