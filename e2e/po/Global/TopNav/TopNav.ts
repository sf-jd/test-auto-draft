import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  $,
  $$,
  WebElement} from 'protractor';
import { BasePage } from '../../BasePage';
import { MainPage } from '../../MainPage';

const Locators = {
  userName: $('.nav-user-settings'),
  signOutButton: $('a.user-sign-out.pad-v-s')
}

export class TopNav extends BasePage {
  
  logOutUser = (): MainPage => {
    this.waitForVisibility(Locators.userName);
    Locators.userName.click();
    this.waitForVisibility(Locators.signOutButton)
    Locators.signOutButton.click()
    return new MainPage();
  }

  clickOnUserName = async () => {
    await this.waitForVisibility(Locators.userName);
    await Locators.userName.click();
  }

  clickOnSignOutButton = async () => {
    await this.waitForVisibility(Locators.signOutButton)
    await Locators.signOutButton.click()
    return new MainPage();
  }
}