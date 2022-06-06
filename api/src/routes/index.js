const bodyParser = require('body-parser');
 
const client = require('./clientRoute');
const company = require('./companyRoute');
const category = require('./categoryRoute');


module.exports = app => {
  app.use(
    bodyParser.json(),
    client,
    company,
    category
  )
}