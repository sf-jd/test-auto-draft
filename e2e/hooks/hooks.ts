const { BeforeAll, After, Status, setDefaultTimeout } = require('cucumber');
import { browser } from 'protractor';


setDefaultTimeout(10 * 1000);

BeforeAll(()=>{
  console.log('before all');
})