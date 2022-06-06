const { Router } = require('express');
const ClientController = require('../controllers/ClientController');

const router = Router();

router
.post('/client/login', ClientController.clientLogin)
.post('/client/register', ClientController.registerClient)

module.exports = router;
