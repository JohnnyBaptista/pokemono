const axios = require('axios');

const pokeApiConfig = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

module.exports = pokeApiConfig;
