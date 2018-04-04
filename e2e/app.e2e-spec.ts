import { InhertixAppPage } from './app.po';

describe('inhertix-app App', () => {
  let page: InhertixAppPage;

  beforeEach(() => {
    page = new InhertixAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
