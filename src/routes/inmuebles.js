const router = require('express').Router();
const InmueblesController = require('../controllers/inmuebles.controller');


//router.get('/active', InmueblesController.getActiveUsers);
//router.get('/:userId/comments/:commentId', InmueblesController.getCommentFromUserById);

//crear
router.post('/crear', InmueblesController.crear);

//borrar
router.delete('/borrar', InmueblesController.borrar);


module.exports = router;