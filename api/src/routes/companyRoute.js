const { Router } = require('express');
const CompanyController = require('../controllers/CompanyController');
const authenticate = require('../middlewares/authenticate');

const router = Router();

router
.get('/company', authenticate, CompanyController.getAllCompanies)
.get('/company/:id', authenticate, CompanyController.getCompany)
.put('/company/:id', authenticate, CompanyController.companyUpdate)
.post('/company/login', CompanyController.companyLogin)
.post('/company/register', CompanyController.companyRegister)

module.exports = router;