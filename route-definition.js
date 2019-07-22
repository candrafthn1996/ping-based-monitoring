'use strict';

var router = require('express').Router();
const controller = require('./api/controllers/device');

router.get('/', controller.index);
router.get('/device-availability', controller.device);

module.exports = router;