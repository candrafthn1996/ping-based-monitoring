const express = require('express');
const app = express();
const controller = require('./route-definition');

app.use('/', controller);

module.exports = app;