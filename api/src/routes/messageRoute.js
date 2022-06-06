const { Router } = require('express');
const MessageController = require('../controllers/MessageController');

const router = Router();

router
.get('/message', MessageController.getAllMessages);

module.exports = router;
