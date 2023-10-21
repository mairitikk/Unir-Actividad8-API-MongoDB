require('../models/inmuebles.model');

// GET /api/inmuebles
const listar = async (req, res) => {
    try {
        const inmueble = await InmueblesModel.find();
        res.status(200).json(inmueble);
    } catch (error) {
        console.error('Error retrieving inmueble:', error);
        res.status(500).send('Error retrieving inmueble');
    }
}

// GET /api/inmuebles/:inmueblesId
const listarById = async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const inmueble = await InmueblesModel.findById(inmuebleId);
        if (!inmueble) {
            res.status(404).send('Inmueble not found');
        } else {
            res.status(200).json(inmueble);
        }
    } catch (error) {
        console.error('Error retrieving inmueble:', error);
        res.status(500).send('Error retrieving inmueble');
    }
}

//POST /api/inmuebles
const crear = async (req, res) => {
    const newInmueble = new InmueblesModel(req.body);
    try {
        const savedInmueble = await newInmueble.save();
        console.log('Inmueble saved successfully:', savedInmueble);
        res.status(200).send('Inmueble inserted successfully');
    } catch (error) {
        console.error('Error saving inmueble:', error);
        res.status(500).send('Error inserting inmueble');
    }
}

//DELETE /api/inmuebles/:inmuebleId
const borrar = async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const inmueble = await InmueblesModel.findByIdAndDelete(inmuebleId);
        if (!inmueble) {
            res.status(404).send('Inmueble not found');
        } else {
            res.status(200).send("inmueble deleted successfuly");
        }
    } catch (error) {
        console.error('Error retrieving inmueble:', error);
        res.status(500).send('Error retrieving inmueble');
    }
}

//PUT /api/inmuebles/:inmuebleId
const actualizar = async (req, res) => {
    const inmuebleId = req.params.inmuebleId;

    try {
        const updatedInmueble = await InmueblesModel.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        if (!updatedInmueble) {
            res.status(404).send('Inmueble not found');
        } else {
            res.status(200).json(updatedInmueble);
        }
    } catch (error) {
        console.error('Error updating inmueble:', error);
        res.status(500).send('Error updating inmueble');
    }

}


module.exports = { crear, borrar, listar, actualizar, listarById };

//CRUDE INMUEBLES
//GET /api/inmuebles -recupera todos los inmuebles
//POST /api/inmuebles -Crea un nuevo inmueble
//PUT /api/inmuebles -acutualiza un inmueble
//DELETE /api/inmuebles Borra un inmueble