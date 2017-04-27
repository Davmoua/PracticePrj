import { PracticeProjectPage } from './app.po';

describe('practice-project App', () => {
  let page: PracticeProjectPage;

  beforeEach(() => {
    page = new PracticeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
