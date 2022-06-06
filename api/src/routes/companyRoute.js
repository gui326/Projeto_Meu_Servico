const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');

const router = Router();

router
.get('/company', CompanyController.getAllCompanies)
.get('/company/:id', CompanyController.getCompany)

module.exports = router;