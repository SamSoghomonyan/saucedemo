import { $ } from '@wdio/globals';
import Page from './page';

class CartPage extends Page {
 public async itemCount() {
   return $$('#cart_contents_container > div > div.cart_list > div.cart_item');
 }
 public get itemName(){
   return $('#item_4_title_link > div');
 }
 public get removeButton(){
   return $('#remove-sauce-labs-backpack');
 }
 public get backContinueShoppingButton(){
   return $('#continue-shopping');
 }
  public get checkoutButton() {
    return $('#checkout');
  }
 async getItemName(){
   return await this.itemName.getText();
 }
 async getItemCount(){
   return await this.itemCount();
 }
 async clickRemoveButton(){
   await this.removeButton.click();
 }
 async clickBackContinueShoppingButton(){
   await this.backContinueShoppingButton.click();
 }
  async clickCheckoutButton(){
    return this.checkoutButton.click();
  }
}

export default new CartPage();
