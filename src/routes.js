const express = require('express');

const router = express.Router();

const treinadorController = require('./controllers/TreinadorController');

//endpoints para treinadro (crud)
router.post('/treinador', treinadorController.store);
router.get('/treinadores', treinadorController.index);
router.get('/treinador/:id', treinadorController.getById);


module.exports = router;