// test/test.js
const chai = require('chai');
const assert = chai.assert;

describe('Simple test', function() {
    it('should return hello message', function() {
        assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!');
    });
});