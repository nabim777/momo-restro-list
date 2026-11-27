const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

Given('user has navigated to the login page', async function () {
  await this.loginPage.gotoLoginPage()
  await expect(this.page).toHaveURL(this.loginPage.loginUrl)
});

When('user logs in with username {string} and password {string} using webUI', async function (username, password) {
  await this.loginPage.login(username, password)
});

Then('user should be redirected to the webUI homepage', async function () {
  await expect(this.page).toHaveURL(this.loginPage.homePageUrl)
});