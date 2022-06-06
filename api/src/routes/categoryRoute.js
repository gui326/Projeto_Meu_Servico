const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const router = Router();

router
.get('/category', CategoryController.getCategories);

module.exports = router;
