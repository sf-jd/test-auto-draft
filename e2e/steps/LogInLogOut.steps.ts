import { Given, When, Then } from 'cucumber';
import { MainPage } from '../po/MainPage';
import { DashboardPage } from '../po/DashboardPage';
import { TopNav } from '../po/Global/TopNav/TopNav';
import { expect } from 'chai';

const mainPage = new MainPage();
const dashboardPage = new DashboardPage();
const topNav = new TopNav();

Given(/^I go to the homepage$/, async () => {
  await mainPage.navigateTo('https://www.powr-staging.io')
});

When(/^I click on the sign up button$/, async () => {
  await mainPage.clickOnSignUp();
});

When(/^I input my username '([^\"]*)' and password '([^\"]*)'$/, async (username, password) => {
  await mainPage.inputSignUpUsername(username)
  await mainPage.inputSignUpUserPassword(password)
});

When(/^I click the submit button$/, async () => {
  await mainPage.submitSignUp()
});

When(/^I can see the dashboard$/, async () => {
  let status = await dashboardPage.containerIsVisible();
  expect(status).to.be.true;
});

When(/^I click on my username on the topnav$/, async () => {
  await topNav.clickOnUserName();
});

When(/^I click on the sign out button$/, async () => {
 await topNav.clickOnSignOutButton()
});

Then(/^I am redirected to the main page$/, async () => {
 let heroTitle = await mainPage.getHeroTitle();
  expect(heroTitle).to.equal('Make your website more powerful.')
});