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
import { DashboardPage } from './DashboardPage';

const Locators = {
  signInButton: $('.nav-account-settings').$('.topnavsignin'),
  usernameInput: $('#sign_in_email'),
  passwordInput: $('#sign_in_password'),
  loginSubmit: $('#sign-in-submit'),
  heroTitle: $('.header-title'),
  signUpButton: $('.nav-account-settings a.signUpTab'),
  signUpUserInput: $('input#user_email'),
  signUpUserPassword: $('input#user_password'),
  signUpSubmit: $('input#sign-up-submit'),
  welcomeModal: $('div#createButtonModal')
}

export class MainPage extends BasePage {
  
  getHeroTitle = async (): Promise<string> => {
    this.waitForVisibility(Locators.heroTitle)
    return Locators.heroTitle.getText();
  }

  clickOnLogin = async () => {
    await this.waitForVisibility(Locators.signInButton);
    await Locators.signInButton.click();
  }

  clickOnSignUp = async () => {
    await this.waitForVisibility(Locators.signUpButton);
    await Locators.signUpButton.click();
  }

  inputUsername =  async (username) => {
    await this.waitForVisibility(Locators.usernameInput);
    await Locators.usernameInput.sendKeys(username);
  }

  inputPassword = async (password) => {
    await this.waitForVisibility(Locators.passwordInput);
    await Locators.passwordInput.sendKeys(password);
  }

  submitLogIn = async ()=>{ 
    await Locators.loginSubmit.click();
    return new DashboardPage();
  }

  inputSignUpUsername = async (username) => {
    await this.waitForVisibility(Locators.signUpUserInput);
    await Locators.signUpUserInput.sendKeys(username);
  }

  inputSignUpUserPassword = async (password) => {
    await this.waitForVisibility(Locators.signUpUserPassword);
    await Locators.signUpUserPassword.sendKeys(password);
  }

  submitSignUp = async () => {
    await Locators.signUpSubmit.click()
    return new DashboardPage;
  }
}