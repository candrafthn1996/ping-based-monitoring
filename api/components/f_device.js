const modelDevice = require('../models/m_device');
const ping = require('ping');
const fs = require('fs');

const func = {
	daily5min: () => {
        let i, data;
        let rawdata = JSON.parse(fs.readFileSync(process.cwd() + '/ip_config.json', 'utf8'));   
        let listip = rawdata.ip_list
        
        for( i = 0; i < listip.length; i++){
            let devicename = listip[ i ].devicename
            ping.promise.probe(listip[ i ].ip)
                .then(function (values) {
                    data = {
                        ip: values.numeric_host,
                        device_name: devicename,
                        device_status: values.alive
                    }
                    modelDevice.addPing(data, function (req2, result) {
                        
                    })
                });
        }
        return true;
	}
};

module.exports = func;