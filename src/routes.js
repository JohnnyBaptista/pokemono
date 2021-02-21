const express = require('express');

const router = express.Router();

const treinadorController = require('../src/controllers/TreinadorController');

const tipoItemController = require('../src/controllers/TipoItemController');

router.post('/treinador', treinadorController.store);


//endpoint tipoItem

router.post('/tipoItem', tipoItemController.store);

router.get('/tipoItem', tipoItemController.index);

router.get('/tipoItem/:id', tipoItemController.getById);

module.exports = router;