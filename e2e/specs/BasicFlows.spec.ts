import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  $,
  $$,
  WebElement
} from 'protractor';
import { MainPage } from '../po/MainPage';
import { DashboardPage } from '../po/DashboardPage';
import { TopNav } from '../po/Global/TopNav/TopNav';

// describe('Basic Flows', () => {
//   let mainPage: MainPage = new MainPage();
//   let dashboardPage: DashboardPage = new DashboardPage();
//   let topNav: TopNav = new TopNav();

//   it('should go to POWr and Login', async () => {
//     await mainPage.navigateTo('https://www.powr.io');
//     await mainPage.logIn('sfl.code@gmail.com', '$@nt334g0');
//     let loggedIn = await dashboardPage.containerIsVisible();
//     expect(loggedIn).toBe(true);
//   });

//   it('should log out', async () => {
//     await topNav.logOutUser();
//     let heroTitle: string = await mainPage.getHeroTitle();
//     expect(heroTitle).toContain('powerful');
//   })

// });