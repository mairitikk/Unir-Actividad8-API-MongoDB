//este ficher0 gestiona la peticiones sobre /api/users

const router = require('express').Router();


const UsersController = require('../../controllers/users.controller');
router.get('/', UsersController.getAllUsers);
router.post('/', UsersController.createUser);
router.put('/:userId', UsersController.updateUser);
router.delete('/:userId', UsersController.deleteUser)
module.exports = router;