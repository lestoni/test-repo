var sum = require('../lib');
var assert = require('assert');

describe('Sum#suite', function() {
  it('should add two numbers', function() {
    var ans = sum(4, 5);

    assert.equal(ans, 9, 'Expected 9 :(');
  });
});