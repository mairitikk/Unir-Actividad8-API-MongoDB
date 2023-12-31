// creamos el servidor y lo ponemos a la escucha
const http = require('http');

//Cargar los datos del fichero de entorno
// node --env-file=.env index.js
require('dotenv').config();

// Config Base de datos
require('./src/config/db');

const app = require('./src/app');

//Crear el servidor
// en ese crear tu aplicasion
const server = http.createServer(app);

//Levantamos el servidor
const PORT = process.env.PORT ?? 3000;
server.listen(PORT);

//Eventos
server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

server.on('error', (error) => {
    console.log(error);
});
