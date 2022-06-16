const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/company', authenticate, CompanyController.getAllCompanies)
.get('/company/:id', authenticate, CompanyController.getCompany)
.post('/company/login', CompanyController.companyLogin)

module.exports = router;