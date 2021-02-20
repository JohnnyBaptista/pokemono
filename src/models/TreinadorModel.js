const connection = require("../database/config");
module.exports = {
  insert(data) {
    try {
      if (data) {
        const { name, city, email, password, exp, genre } = data;
        return new Promise((resolve, reject) => {
          connection.query(
            "INSERT INTO treinador (nome, cidade, email, senha, exp, genero) VALUES (?, ?, ?, ?, ?, ?)",
            [name, city, email, password, exp, genre],
            (error, result) => {
              if (error) reject(error);
              resolve(result);
            }
          );
        });
      }
    } catch (e) {
      throw e;
    }
  },

  getAll() {
    try {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT * FROM treinador",
          (error, result) => {
            if (error) reject(error);
            resolve(result);
          }
        );
      });
    } catch (e) {
      throw e;
    }
  },

  get(id) {
    try {
        return new Promise((resolve, reject) => {
          connection.query(
            "SELECT * FROM treinador WHERE treinador.id =  ?", [id],
            (error, result) => {
              if (error) reject(error);
              resolve(result);
            }
          );
        });
      } catch (e) {
        throw e;
      } 
  }
};
