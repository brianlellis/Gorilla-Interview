const assert = require('assert');
browser.url('/');
browser.windowHandleSize({width:1900,height:800});

describe('fixture', () => {
  it('Sidebar is correct width', () => {
    const sidebarWidth = browser.getElementSize('//div[@class="sidebar"]','width'); 
    assert.equal( (sidebarWidth >= 230 && sidebarWidth <= 235) ? 233 : 0, 233);
  });
});

describe('fixture', () => {
  it('Swatches are correct height', () => {
  	browser.getElementSize('.sidebar','width')
    assert.equal(browser.getElementSize('//li[@class="product"][1]/ul/li[1]','height'), 15);
  });
});