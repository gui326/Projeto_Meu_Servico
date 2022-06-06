const { Router } = require('express');
const ChatController = require('../controllers/ChatController');

const router = Router();

router
.get('/chat', ChatController.getChats);

module.exports = router;
