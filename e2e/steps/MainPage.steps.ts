// import { Given, When, Then } from 'cucumber';
// import { MainPage } from '../po/MainPage';
// import { DashboardPage } from '../po/DashboardPage';
// import { expect } from 'chai';

// const mainPage = new MainPage();
// const dashboardPage = new DashboardPage();

// Given(/^I go to the homepage$/, async () => {
//   await mainPage.navigateTo('https://www.powr-staging.io')
// });

// When(/^I click on the login button$/, async () => {
//   await mainPage.clickOnLogin()
// });

// When(/^I input my username '([^\"]*)' and password '([^\"]*)'$/, async (username, password) => {
//   await mainPage.inputUsername(username)
//   await mainPage.inputPassword(password)
// });

// When(/^I click the submit button$/, async () => {
//   await mainPage.submitLogIn()
// });

// Then(/^I can see the dashboard$/, async () => {
//   let status = await dashboardPage.containerIsVisible();
//   expect(status).to.be.true;
// });