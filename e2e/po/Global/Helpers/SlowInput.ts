import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  $,
  $$,
  WebElement} from 'protractor';

/**
 * When the control flow is not broken with
 * async await this helper comes in handy to
 * deal with an annoying selenium/chrome bug
 * 
 * @param  {string} text
 * @param  {ElementFinder} locator
 */

export const SlowInput = (text: string, locator: ElementFinder) => {
  let splitText: string[] = text.split('');
  splitText.map( each =>{
    locator.sendKeys(each);
  });
}