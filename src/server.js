const express = require('express');
const cors = require('cors') 
const routes = require('./routes');

const PORT = process.env.PORT || 3333
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', + PORT );
})