const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/order', authenticate, OrderController.getAllOrders)
.get('/order/:id', authenticate, OrderController.getOrder)
.post('/order', authenticate, OrderController.createOrder)

module.exports = router;
