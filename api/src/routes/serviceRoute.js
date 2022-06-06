const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');

const router = Router();

router
.get('/service', ServiceController.getAllServices);

module.exports = router;
