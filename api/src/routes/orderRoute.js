const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();

router
.get('/order', OrderController.getAllOrders);

module.exports = router;
