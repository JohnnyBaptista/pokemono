const connection = require('../database/config');
const queryExecuter = require("../helpers/queryExecuter");

module.exports = {
    insert(id_treinador, id_pokemon) {
        return queryExecuter(
            connection,
            "INSERT INTO pokemon_treinador (id_pokemon, id_treinador) VALUES (?,?)",
            [id_pokemon, id_treinador]
          );
    },

    getAll() {
        try {
            const sql = "SELECT pokemon_treinador.id_pokemon, treinador.nome FROM pokemon_treinador JOIN treinador ON treinador.id = pokemon_treinador.id_treinador"
            return queryExecuter(connection, sql, []);
        } catch (e) {
          throw e;
        }
    },

    getByTrainerId(id) { //os pokemon do treinador X
      try {
        const sql = "SELECT pokemon_treinador.id_pokemon, treinador.nome FROM pokemon_treinador JOIN treinador ON treinador.id = pokemon_treinador.id_treinador WHERE treinador.id = ?"
        return queryExecuter(
          connection,
          sql,
          [id]
        );
      } catch (e) {
        throw e;
      }
    },

    getByPokemonAndTrainerId(idTreinador, idPokemon) { //pokemon especifico do treinador X
      try {
        const sql = "SELECT pokemon_treinador.id_pokemon, treinador.nome FROM pokemon_treinador JOIN treinador ON treinador.id = pokemon_treinador.id_treinador WHERE treinador.id = ? AND pokemon_treinador.id_pokemon = ?"
        return queryExecuter(
          connection,
          sql,
          [idTreinador, idPokemon]
        );
      } catch (e) {
        throw e;
      }
    },

    delete(id) {
        try {
          return queryExecuter(connection, "DELETE FROM pokemon_treinador WHERE pokemon_treinador.id = ?", [id]);
        } catch (e) {
          throw e;
        }
      },
}
