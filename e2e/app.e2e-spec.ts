import { FirestorePage } from './app.po';

describe('firestore App', () => {
  let page: FirestorePage;

  beforeEach(() => {
    page = new FirestorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
