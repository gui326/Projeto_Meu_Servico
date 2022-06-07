require("dotenv-safe").config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())

routes(app);

app.listen(port, () => console.log(`server is running in port ${port}`));

module.exports = app;