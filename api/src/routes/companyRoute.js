const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');

const router = Router();

router
.get('/company', CompanyController.getAllCompanies);

module.exports = router;