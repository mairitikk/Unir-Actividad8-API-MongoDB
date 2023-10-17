const listar = (req, res) => {
    res.json({
        message: 'recupero todos los inmuebles'
    })
}


const crear = (req, res) => {
    console.log(req.body)

    res.json({ message: ' inmueble creado [Controlador' })
}
const borrar = (req, res) => {
    res.json({ message: 'Delete inmueble [Controlador' })
}
const actualizar = (req, res) => {
    res.json({ message: 'Se actualiza el inmueble' })
}

module.exports = { crear, borrar, listar, actualizar };

//CRUDE INMUEBLES
//GET /api/inmuebles-recupera todos los inmuebles
//POST /api/inmuebles -Crea un nuevo inmueble
//PUT /api/inmuebles -acutualiza un inmueble
//DELETE /api/inmuebles Borra un inmueble

