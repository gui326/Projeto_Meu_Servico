const { Router } = require('express');
const PointController = require('../controllers/PointController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/point', authenticate, PointController.getAllPoints);

module.exports = router;
