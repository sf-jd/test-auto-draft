import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  $,
  $$,
  WebElement} from 'protractor';
import { BasePage } from "./BasePage";

const Locators = {
  dashboardContainer: $('.dashboard-content')
}

export class DashboardPage extends BasePage {
  
  containerIsVisible = async () => {
    return await this.waitForVisibility(Locators.dashboardContainer);
  }
}