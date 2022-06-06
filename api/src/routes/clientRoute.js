const { Router } = require('express');
const ClientController = require('../controllers/ClientController');

const router = Router();

router
.post('/client/login', (req, res) => {res.status(200).json({message: 'ok teste'})});

module.exports = router;
