import { NexXTCakePage } from './app.po';

describe('nex-xtcake App', () => {
  let page: NexXTCakePage;

  beforeEach(() => {
    page = new NexXTCakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
