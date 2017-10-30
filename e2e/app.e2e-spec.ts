import { EatUpRestaurantPage } from './app.po';

describe('eat-up-restaurant App', function() {
  let page: EatUpRestaurantPage;

  beforeEach(() => {
    page = new EatUpRestaurantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
