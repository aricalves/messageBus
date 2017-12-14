const assert = require('assert');
const expect = require('expect.js');

const bus = require('./messageBus.js');


describe('messageBus', function() {
  describe('#contains()', function() {
    it('should return a boolean', function() {
      expect(bus.messageBus.contains).to.be.a('function');
    });
  });
});