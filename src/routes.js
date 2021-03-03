const express = require('express');

const router = express.Router();

const treinadorController = require('../src/controllers/TreinadorController');
const tipoItemController = require('../src/controllers/TipoItemController');
const itemTreinadorController = require('../src/controllers/ItemTreinadorController');
const pokemonTreinadorController = require('./controllers/PokemonTreinadorController');
const batalhaController = require('./controllers/BatalhaController');

//endpoints para treinador (crud)
router.post('/treinador', treinadorController.store);
router.post('/login', treinadorController.login)
router.get('/treinadores', treinadorController.index);
router.get('/treinador/:id', treinadorController.getById);
router.delete('/treinador/:id', treinadorController.delete);
router.put('/treinador', treinadorController.update);

//endpoints tipoItem
router.post('/tipoItem', tipoItemController.store);
router.get('/tipoItem', tipoItemController.index);
router.get('/tipoItem/:id', tipoItemController.getById);
router.delete('/tipoItem/:id', tipoItemController.delete);
router.put('/tipoItem', tipoItemController.update);

//endpoint itemTreinador
router.post('/itemTreinador', itemTreinadorController.store);
router.get('/itemTreinador', itemTreinadorController.index);
router.get('/itemTreinador/:id', itemTreinadorController.getById);

//endpoint pokemontreinador
router.post('/pokemon', pokemonTreinadorController.store)
router.get('/pokemon', pokemonTreinadorController.index)
router.get('/pokemon/treinador/:id', pokemonTreinadorController.getByTrainerId)
//endpoints batalha
router.post('/batalha', batalhaController.store);
router.get('/batalha', batalhaController.index);
router.get('/batalha/:id', batalhaController.getById);
router.delete('/batalha/:id', batalhaController.delete);

module.exports = router;
