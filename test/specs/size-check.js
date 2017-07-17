const assert = require('assert');
browser.url('/');
browser.windowHandleSize({width:1900,height:800});

describe('fixture', () => {
  it('Page container is correct width', () => {
    const mainCont = browser.getElementSize('#content','width'); 
    assert.equal( mainCont, 1170);
  });
});

describe('fixture', () => {
  it('Sidebar is correct width', () => {
    const sidebarWidth = browser.getElementSize('//div[@class="sidebar"]','width'); 
    assert.equal( (sidebarWidth >= 230 && sidebarWidth <= 235) ? 233 : 0, 233);
  });
});

describe('fixture', () => {
  it('Product Grid is correct width', () => {
    const prodGrid = browser.getElementSize('#productGrid','width'); 
    assert.equal( (prodGrid >= 868 && prodGrid <= 873) ? 870 : 0, 870);
  });
});

describe('fixture', () => {
  it('Swatches are correct height', () => {
  	browser.getElementSize('.sidebar','width')
    assert.equal(browser.getElementSize('//li[@class="product"][1]/ul/li[1]','height'), 15);
  });
});