import { browser, by, element } from 'protractor';

export class DashboarderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dashboarder-root h1')).getText();
  }
}
