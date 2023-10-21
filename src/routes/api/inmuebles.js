//este fichero gestiona la peticiones sobre /api/inmuebles

const router = require('express').Router();
const InmueblesController = require('../../controllers/inmuebles.controller');

router.get('/', InmueblesController.listar);
router.get('/:inmuebleId', InmueblesController.listarById);
router.post('/', InmueblesController.crear);
router.put('/:inmuebleId', InmueblesController.actualizar);
router.delete('/:inmuebleId', InmueblesController.borrar)

module.exports = router;