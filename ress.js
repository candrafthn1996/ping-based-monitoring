'use strict';

let data;

exports.ok = function(values, res) {
    data = {
        'code' : 200,
        'status': 'OK',
        'body': values
    };
    res.json(data);
    res.end();
};

/* istanbul ignore next */
exports.notfound = function(values, res) {
    data = {
          'code' : 404,
          'status': 'Data Was Not Found',
          'body': []
    };
    res.json(data);
    res.end();
  };

  /* istanbul ignore next */
  exports.badrequest = function(values, res) {
    data = {
          'code' : 400,
          'status': 'Bad Request',
    };
    res.json(data);
    res.end();
  };