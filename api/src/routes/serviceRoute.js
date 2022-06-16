const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/service', authenticate, ServiceController.getAllServices)
.post('/service', authenticate, ServiceController.createService)

module.exports = router;
