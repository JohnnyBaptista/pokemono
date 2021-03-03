const pokemonTreinadorModel = require("../models/PokemonTreinadorModel");
const pokeApi = require("../services/pokeApiConfig");

module.exports = {
  async store(req, res) {
    try {
      const { idTreinador, idPokemon } = req.body;
      const response = await pokemonTreinadorModel.insert(
        idTreinador,
        idPokemon
      );
      if (response)
        return res.status(200).json({ msg: "Inserido com sucesso!" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: e });
    }
  },

  async index(req, res) {
    try {
      const treinadorPokemonResponse = await pokemonTreinadorModel.getAll();
      const response = await Promise.all(
        treinadorPokemonResponse.map(async (pokemonTreinador) => {
          const pokemon = await pokeApi.get(
            `/pokemon/${pokemonTreinador.id_pokemon}`
          );
          console.log({
            treinador: pokemonTreinador.nome,
            pokemon: pokemon.data.forms[0].name,
          });
          return {
            treinador: pokemonTreinador.nome,
            pokemon: pokemon.data.forms[0].name,
          };
        })
      );
      if (response) return res.status(200).json({ pokemonTreinador: response });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: e });
    }
  },

  async getByTrainerId(req, res) {
    try {
      const response = await pokemonTreinadorModel.getByTrainerId(
        req.params.id
      );
      if (response.length > 0)
        return res.status(200).json({ pokemonTreinador: response });
      else
        return res
          .status(200)
          .json({
            msg: `Pokemon do treinador com o id: ${req.params.id} nao existe na base`,
            pokemonTreinador: null,
          });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: e });
    }
  },

  async getByPokemonTrainerId(req, res) {
    try {
      const response = await pokemonTreinadorModel.getByPokemonAndTrainerId(
        req.params.idTreinador,
        req.params.idPokemon
      );
      if (response.length > 0)
        return res.status(200).json({ pokemonTreinador: response });
      else
        return res
          .status(200)
          .json({
            msg: `Ocorreu um erro ao buscar informações com esses id's`,
            tipoItem: null,
          });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: e });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const item = await pokemonTreinadorModel.getById(id);
      if (item.length > 0) {
        const response = await pokemonTreinadorModel.delete(id);
        if (response) {
          return res.status(200).json({ msg: `Item deletado com sucesso!` });
        } else return res.status(400).json({ item: null, msg: "FATAL ERROR" });
      } else {
        return res
          .status(400)
          .json({ msg: "Pokemon_treinador com esse ID não existe!" });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: e });
    }
  },
};
