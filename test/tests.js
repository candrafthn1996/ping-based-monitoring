'use strict';
require('dotenv').config()

// test env settings
process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = require('chai').expect;
const app = require('../app_test.js');
const funcDevice = require('../api/components/f_device');
// const app2 = require('../api/controllers/device');
chai.use(require('chai-http'));

/** Test V1 */
describe('API', function () {
	/** How long to wait for a response (ms) */
	this.timeout(5000);

	describe('Cron Test', function () {
		this.timeout(15000)
		it('Should ping device', async () => {
			this.timeout(15000)
			const res = await funcDevice.daily5min();
			expect(res).be.ok
		})
	})

	describe('GET', function () {	
		describe('/', function () {
			it('should GET welcome message', function (done) {
				chai.request(app)
					.get('/')
					.then(function (res) {
						try {
							expect(res).to.have.status(200);
							expect(res).to.be.json;
							expect(res.body).to.be.an('object');
							done();
						} catch (err) {
							done(err);
						}
					});
			});

			it('should GET device avail', function (done) {
				chai.request(app)
					.get('/device-availability')
					.then(function (res) {
						try {
							expect(res).to.have.status(200);
							expect(res).to.be.json;
							expect(res.body).to.be.an('object');
							done();
						} catch (err) {
							done(err);
						}
					});
			});
		});
	});

});

