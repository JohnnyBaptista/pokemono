const express = require('express');

const router = express.Router();

const treinadorController = require('./controllers/TreinadorController');


router.post('/treinador', treinadorController.store);

module.exports = router;