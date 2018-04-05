const { BeforeAll, After, Status, setDefaultTimeout } = require('cucumber');
import { browser } from 'protractor';


setDefaultTimeout(30 * 1000);

BeforeAll(()=>{
  console.log('before all');
})