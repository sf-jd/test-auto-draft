import { Config, browser } from 'protractor';
import { pretty } from 'cucumber-pretty';
export let config : Config = {
  capabilities: {
    browserName: 'firefox'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["../../e2e/features/*.feature"],
  allScriptsTimeout: 15000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  baseUrl: "https://www.powr.io",

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    require: [
      './*.steps.js',
       '../hooks/*.js'
      ],
    format: 'node_modules/cucumber-pretty',
    tags: '@LogInLogOut'
  },

  onPrepare: () => {
    //Boo angular boooo
    browser.ignoreSynchronization = true
    //Maximize the browser
    browser.manage().window().maximize();
  }

}