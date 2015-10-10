var test = require('tap').test;
var getPort = require('../index.js');

test('it can return port', function(t) {
  var port = getPort();
  t.ok(typeof port === 'number', 'it is a number');
  t.ok(port > 1024, 'port is not requires to be root');
  t.ok(port < 65535, 'port is less than upper limit');

  t.end();
});
