const router = require('express').Router();
const ProductControler = require('../controllers/products.controller');



router.get('/', ProductControler.getAllProducts);
router.get('/department/:deptName', ProductControler.getByDepartment)
router.put('/edit', ProductControler.editProduct);
module.exports = router;