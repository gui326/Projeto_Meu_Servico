const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/service', authenticate, ServiceController.getAllServices)
.put('/service/:id', authenticate, ServiceController.updateService)
.post('/service', authenticate, ServiceController.createService)
.delete('/service/:id', authenticate, ServiceController.deleteService)

module.exports = router;
