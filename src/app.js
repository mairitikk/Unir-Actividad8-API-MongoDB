// Creamos y configuramos la aplicacion de Express
const express = require('express');
const fs = require('node:fs/promises');
const dayjs = require('dayjs');

const app = express();

//Configuraciones app express
app.use(express.json());


app.use(async (req, res, next) => {
    const linea = `[${dayjs().format('DD-MM-YYYY HH:mm:ss')}] Metodo: ${req.method}. Url:${req.url}\n`
    await fs.appendFile('./main.log', linea);
    next();
})

app.use('/api', require('./routes/api'));

module.exports = app;