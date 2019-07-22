const db = require('../../conn');
// const dbSync = require('../../dbsync');

const models = {

    get_mst_pbm: function (callback) {
        return db.query('SELECT DISTINCT a.ip, a.device_name, CONCAT(((SELECT COUNT(DISTINCT b.id) FROM mst_pbm b WHERE a.ip = b.ip and device_status = 1)/((SELECT COUNT(DISTINCT b.id) FROM mst_pbm b WHERE a.ip = b.ip and device_status = 1) + (SELECT COUNT(DISTINCT b.id) FROM mst_pbm b WHERE a.ip = b.ip and device_status = 0))*100), "%")as availability from mst_pbm as a ', function (err, res) {
            /* istanbul ignore else */
            if (!err) {
                callback(null, res);
            } else {
                callback(null, '');
            }
        });
    },

    addPing: function (data, callback) {
		return db.query('INSERT INTO mst_pbm SET ?', [data], function (err, res) {
			/* istanbul ignore else */
			if (!err) {
				callback(null, res);
			} else {
				callback(null, '');
			}
		});
	}
}

module.exports = models;