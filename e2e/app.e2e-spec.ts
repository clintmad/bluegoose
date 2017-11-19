import { BluegoosePage } from './app.po';

describe('bluegoose App', function() {
  let page: BluegoosePage;

  beforeEach(() => {
    page = new BluegoosePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
