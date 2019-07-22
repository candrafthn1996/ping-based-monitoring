'use strict';

const response = require('../../ress');
const modelDevice = require('../models/m_device');
const funcDevice = require('../components/f_device');
var CronJob = require('cron').CronJob;

/** CRON STARTS HERE */
const jobReminder = new CronJob('*/5 * * * * *', function () {
    funcDevice.daily5min()
}, null, true, 'Asia/Jakarta');
jobReminder.start();
/** CRON ENDS HERE */
// 
/** API STARTS HERE */
exports.index = function(req, res) {
    response.ok("Welcome to Ping Based Monitoring API", res);
};

exports.ping = function(req, res) {
    console.log(jobReminder)
};

exports.device = function(req, res) {
    modelDevice.get_mst_pbm(function (req2, rows) {
        /* istanbul ignore else */
        if (rows){
            response.ok(rows, res);
        } else {
            response.badrequest(rows, res);
        }
    });
};
    

