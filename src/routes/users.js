const router = require('express').Router();
const UsersController = require('../controllers/users.controller');


router.get('/active', UsersController.getActiveUsers);
router.get('/:userId/comments/:commentId', UsersController.getCommentFromUserById);

router.post('/create', UsersController.createUser);
router.delete('/delete', UsersController.deleteUser);


module.exports = router;