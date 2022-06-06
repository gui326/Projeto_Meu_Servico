const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();

router
.get('/order', OrderController.getAllOrders)
.get('/order/:id', OrderController.getOrder)
.post('/order', OrderController.createOrder)

module.exports = router;
