const assert = require('assert');

describe('fixture', () => {
  it('has the expected page title', () => {
    browser.url('/');
    assert.equal(browser.getTitle(), 'Home |');
  });
});