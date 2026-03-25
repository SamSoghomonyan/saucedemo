import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from "../pageobjects/login.page.ts";
import {expect} from "@wdio/globals";

Given('I am on the login page', async () => {
  await LoginPage.open();
});

When('I login with {string} and {string}', async (username: string, password: string) => {
  await LoginPage.login(username, password);
});

Then('I should see an error message', async () => {
  const text =await LoginPage.getErrorMessage();
  expect(text).toEqual('Epic sadface: Username and password do not match any user in this service');
});

Then('I should see the secure area', async () => {
  const text = await LoginPage.getSuccessMessage();
  expect(text).toEqual('Sauce Labs Backpack');
});