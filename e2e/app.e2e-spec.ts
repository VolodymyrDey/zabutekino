import { ZabutekinoPage } from './app.po';

describe('zabutekino App', function() {
  let page: ZabutekinoPage;

  beforeEach(() => {
    page = new ZabutekinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
