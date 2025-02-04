const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const assert = require("assert")
const util = require('util');

const LoginPage = require("../pageObjects/LoginPage.js")
const loginPage = new LoginPage

Given('user has navigated to the login page', async function () {
  await loginPage.gotoLoginPage()
  await expect(page).toHaveURL(loginPage.loginUrl)
});

When('user logs in with username {string} and password {string} using webUI', async function (username, password) {
  await loginPage.login(username,password)
});

Then('user should be redirected to the webUI homepage', async function () {
  await expect(page).toHaveURL(loginPage.homePageUrl)
});

Then('user should get {string} message', async function (expectedMessage) {
  const actualMessage = await page.locator(loginPage.messageSelector).textContent()
    assert.equal(
      actualMessage,
      expectedMessage,
      `Expected message "${expectedMessage}" but received "${actualMessage}"`
    )
});