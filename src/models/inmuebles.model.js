const mongoose = require('mongoose');

const inmuebleSchema = new mongoose.Schema({
    piso: String,
    letra: String,
    extension: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email_contacto: String
});

global.InmueblesModel = mongoose.model('Inmuebles', inmuebleSchema);