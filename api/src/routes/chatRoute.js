const { Router } = require('express');
const ChatController = require('../controllers/ChatController');

const router = Router();

router
.get('/chat', ChatController.getChats)
.get('/chat/:id', ChatController.getChat)
.post('/chat', ChatController.createChat)
.post('/chat/:id', ChatController.createMessage)

module.exports = router;
