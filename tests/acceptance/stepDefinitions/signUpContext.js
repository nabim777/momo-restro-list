const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { expect } = require('@playwright/test');

Given('user has navigated to the sign-up page', async function () {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('http://localhost:8080/sign-up');
  await expect(page).toHaveURL(/\/sign-up$/);
  await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
});

When('user submits the sign-up form with all fields empty', async function () {
  await page.getByRole('button', { name: 'Sign up' }).click();
});

Then('user should get {string} message', async function (expectedMessage) {
  await expect(page.getByText(expectedMessage, { exact: true })).toBeVisible();
});

Then('user should remain on the sign-up page', async function () {
  await expect(page).toHaveURL(/\/sign-up$/);
});