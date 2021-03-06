var CELLINDEX = require('../src/CELLINDEX');
var error = require('formula-errors');
var test = require('tape');

test('should convert row and column to number', function(t) {
  t.plan(3)
  t.equal( CELLINDEX(0, 0), 0, 'Should be 0');
  t.equal( CELLINDEX(0, 1), 1, 'Should be 1');
  t.equal( CELLINDEX(1, 1), 16385, 'Should be 16385');
});
