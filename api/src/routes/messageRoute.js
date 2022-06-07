const { Router } = require('express');
const MessageController = require('../controllers/MessageController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/message', authenticate, MessageController.getAllMessages);

module.exports = router;
