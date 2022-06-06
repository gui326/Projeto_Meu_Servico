const { Router } = require('express');
const PointController = require('../controllers/PointController');

const router = Router();

router
.get('/point', PointController.getAllPoints);

module.exports = router;
