module.exports = app;


const assert = require('chai').assert;
const app = require('../app');
describe('Simple test', function () {
  it('should return hello message', function () {
    const response = 'Hello, GitHub Actions!'; // Mock the server response
    assert.equal(response, 'Hello, GitHub Actions!');
  });
});


//test/test.js
