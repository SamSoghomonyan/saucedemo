import { Given ,When, Then } from '@cucumber/cucumber';
import LoginPage from "../pageobjects/login.page.ts";
import ProductsPage from "../pageobjects/products․page.ts";
import HeaderComponent from "../components/header.component.ts";
import CartPage from "../pageobjects/cart.page.ts";
import YourInformationPage from "../pageobjects/yourInformation.page.ts";
import { expect } from "@wdio/globals";

Given('I am on the login page again', async () => {
  await LoginPage.open();
});

Then('I should see an error message', async () => {
  const text = await LoginPage.getErrorMessage();
  expect(text).toContain('Epic sadface');
});

Then('I should see the secure area', async () => {
  const text = await LoginPage.getSuccessMessage();
  expect(text).toEqual('Sauce Labs Backpack');
});

Then('I click "Add to cart" for "Sauce Labs Backpack"', async () => {
  await ProductsPage.addItemToCart();
});

Then('I click cart icon', async () => {
  await HeaderComponent.openCart();
});

Then('i should see the item in cart list', async () => {
  const name = await CartPage.getItemName();
  const count = await CartPage.getItemCount();
  expect(name).toEqual("Sauce Labs Backpack");
  expect(count.length).toEqual(1);
});

When('I click Remove button', async () => {
  await CartPage.clickRemoveButton();
});

Then('the cart should be empty', async () => {
  const count = await CartPage.getItemCount();
  expect(count.length).toEqual(0);
});

Then('I click "Continue Shopping"', async () => {
  await CartPage.clickBackContinueShoppingButton();
});

Then('I click "Add to cart" button again', async () => {
  await ProductsPage.addItemToCart();
});

When('I click on the shopping cart icon And I click the "Checkout" button', async () => {
  await HeaderComponent.openCart();
  await CartPage.clickCheckoutButton();
});

Then('I should see the "Checkout: Your Information" page', async () => {
  const name = await YourInformationPage.getPageName();
  expect(name).toEqual("Checkout: Your Information");
});