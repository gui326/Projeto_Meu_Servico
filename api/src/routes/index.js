const bodyParser = require('body-parser')
 
const client = require('./clientRoute')
const company = require('./companyRoute')


module.exports = app => {
  app.use(
    bodyParser.json(),
    client,
    company,
  )
}