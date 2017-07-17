const assert = require('assert');
browser.url('/');

describe('fixture', () => {
  it('Search auto complete is functional', () => {
  	browser.setValue('#searchInput','pr');
  	assert.ok( browser.isVisible('.autocomplete-suggestions') );
  });
});
