const bodyParser = require('body-parser');
 
const client = require('./clientRoute');
const company = require('./companyRoute');
const category = require('./categoryRoute');
const service = require('./serviceRoute');
const order = require('./orderRoute');
const chat = require('./chatRoute');
const message = require('./messageRoute');
const point = require('./pointRoute');


module.exports = app => {
  app.use(
    bodyParser.json(),
    client,
    company,
    category,
    service,
    point,
    chat,
    message,
    order
  )
}