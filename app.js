'use strict';

module.exports = function(app) {
    const controller = require('./api/controllers/device');

    app.route('/')
        .get(controller.index);

    app.route('/device-availability')
        .get(controller.device);
};
// const express = require('express');
// const app = express();
// const controller = require('./route-definition');

// app.use('/', controller);

// module.exports = app;
// var express = require('express');
// var router = express.Router();

// router.use('/read', require('./routes/route-definitions'));

// module.exports = router;
