import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  $,
  $$,
  WebElement} from 'protractor';

export class BasePage {
  
  navigateTo = (url:string) =>{
     return browser.get(url)
  }
  /**
   * Driver method to wait for an element to be
   * visible in the page. This prevents the flow
   * to be disrupted by elements not being present
   * when the tests try to interact with them
   * 
   * @param  {ElementFinder} locator
   */ 
  waitForVisibility = (locator: ElementFinder)=>{
    return browser.wait(ExpectedConditions.visibilityOf(locator))
  }

}