const { setWorldConstructor } = require('@cucumber/cucumber');
const LoginPage = require('../pageObjects/LoginPage.js');

class CustomWorld{
  init(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }
}

setWorldConstructor(CustomWorld);