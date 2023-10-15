// Creamos y configuramos la aplicacion de Express
const express = require('express');
const app = express();

//Configuraciones app express
app.use(express.json());

//app.get('/pruebas', (req, res) => {
//Hacemos acciones varias
//Responder
//  res.send('las pruebas funcionan')
//});

app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use('/api', require('./routes/api'));



module.exports = app;