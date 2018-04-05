import { browser, Config } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./specs/*.spec.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  /*prevent collision with jquery on global space
   * this lets us use $() style locators */
  noGlobals: true,

  onPrepare: () => {
    //Boo angular boooo
    browser.ignoreSynchronization = true
    //Maximize the browser
    browser.manage().window().maximize();
    //Lets use a pretty console reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
}