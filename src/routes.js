const express = require('express');

const router = express.Router();

const treinadorController = require('../src/controllers/TreinadorController');
const tipoItemController = require('../src/controllers/TipoItemController');

//endpoints para treinador (crud)
router.post('/treinador', treinadorController.store);
router.get('/treinadores', treinadorController.index);
router.get('/treinador/:id', treinadorController.getById);

//endpoint tipoItem
router.post('/tipoItem', tipoItemController.store);
router.get('/tipoItem', tipoItemController.index);
router.get('/tipoItem/:id', tipoItemController.getById);

module.exports = router;
