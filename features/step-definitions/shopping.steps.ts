import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from "../pageobjects/login.page.ts";
import YourInformationPage from "../pageobjects/yourInformation.page.ts";
import CheckoutOverviewPage from "../pageobjects/checkoutOverview.page.ts";
import SuccessfulFinshPage from "../pageobjects/successfulFinshPage.ts";
import {expect} from "@wdio/globals";

Given('I am on the login page again', async () => {
  await LoginPage.open();
});

Then('I try to continue without filling name info', async () => {
  await YourInformationPage.addLastName("Soghomonyan");
  await YourInformationPage.addZipCode(1212);
  await YourInformationPage.clickContinueButton();
  const errorMessage = await YourInformationPage.getErrorMessage();
  expect(errorMessage).toEqual('Error: First Name is required');
});
Then('I try to continue without filling last name info', async () => {
  await browser.refresh();
  await YourInformationPage.addName("Sam");
  await YourInformationPage.addZipCode(1212);
  await YourInformationPage.clickContinueButton();
  const errorMessage = await YourInformationPage.getErrorMessage();
  expect(errorMessage).toEqual('Error: Last Name is required');
});

Then('I try to continue without filling zip code info', async () => {
  await browser.refresh();
  await YourInformationPage.addName("Sam");
  await YourInformationPage.addLastName("Soghomonyan");
  await YourInformationPage.clickContinueButton();
  const errorMessage = await YourInformationPage.getErrorMessage();
  expect(errorMessage).toEqual('Error: Postal Code is required');
});

When('I fill checkout info with first name "John", last name "Doe", zip "12345"',async ()=>{
  await browser.refresh();
  await YourInformationPage.addName("John");
  await YourInformationPage.addLastName("Doe");
  await YourInformationPage.addZipCode(12345);
});

Then('I click Continue', async () => {
  await YourInformationPage.clickContinueButton();
});

Then('I should see shopping dettalis',async ()=>{
  const tax = await CheckoutOverviewPage.getTax();
  const price = await CheckoutOverviewPage.getPrice();
  const total = await CheckoutOverviewPage.getTotal();
  const taxValue = Number(tax.replace('$', ''));
  const priceValue = Number(price.replace('$', ''));
  const totalValue = Number(total.replace('$', ''));
  expect(taxValue+priceValue).toEqual(totalValue);
});

Then('i click finish button',async ()=>{
  await CheckoutOverviewPage.clickFinishButton();
});

Then('I should see a success message "Thank you for your order!"', async () => {
  const succes = await SuccessfulFinshPage.getSuccessfulMessage();
  const text = await SuccessfulFinshPage.getDispatched();
  expect(succes).toEqual('Thank you for your order!');
  expect(text).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});