const { Router } = require('express');
const ChatController = require('../controllers/ChatController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/chat', authenticate, ChatController.getChats)
.get('/chat/:id', authenticate, ChatController.getChat)
.post('/chat', authenticate, ChatController.createChat)
.post('/chat/:id', authenticate, ChatController.createMessage)

module.exports = router;
