// Creamos y configuramos la aplicacion de Express
const express = require('express');
const app = express();

//Configuraciones app express
app.use(express.json());

app.use('/inmuebles', require('./routes/inmuebles'));
app.use('/api', require('./routes/api'));



module.exports = app;