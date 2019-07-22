const express = require('express');
const app = express();
const port = process.env.PORT || 3131;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app');
// const routes = require('./route-definition');
routes(app);

app.listen(port);
require('./api/controllers/device');

