import { TestSizePage } from './app.po';

describe('test-size App', function() {
  let page: TestSizePage;

  beforeEach(() => {
    page = new TestSizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
