var test = require('tape');
var cell = require('../src/CELL');
var c = new cell(0);

test('cell', function(t) {
  t.plan(3);

  t.equal( c.index, 0 );
  c = new cell(100);
  t.equal( c.index, 100 );
  t.throws( new cell('foo') );

});
