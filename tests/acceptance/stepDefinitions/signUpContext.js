const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('user has navigated to the sign-up page', async function () {
  await this.page.addInitScript(() => localStorage.clear());
  await this.page.goto('http://localhost:8080/sign-up');
  await expect(this.page).toHaveURL(/\/sign-up$/);
  await expect(this.page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
});

When('user submits the sign-up form with all fields empty', async function () {
  await this.page.getByRole('button', { name: 'Sign up' }).click();
});

Then('user should get {string} message', async function (expectedMessage) {
  await expect(this.page.getByText(expectedMessage, { exact: true })).toBeVisible();
});

Then('user should remain on the sign-up page', async function () {
  await expect(this.page).toHaveURL(/\/sign-up$/);
});