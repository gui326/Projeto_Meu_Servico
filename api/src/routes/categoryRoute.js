const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/category', authenticate, CategoryController.getCategories);

module.exports = router;
