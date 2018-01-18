import { DashboarderPage } from './dashboarder.po';

describe('dashboarder App', () => {
  let page: DashboarderPage;

  beforeEach(() => {
    page = new DashboarderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dashboarder!');
  });
});
