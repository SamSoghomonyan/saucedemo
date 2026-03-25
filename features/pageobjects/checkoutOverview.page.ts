import { $ } from '@wdio/globals';
import Page from './page';

class CheckOverviewPage extends Page{
  public get price(){
    return $('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div');
  }
  public get itemTotal(){
    return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label');
  }
  public get tax(){
    return $('#checkout_summary_container > div > div.summary_info > div.summary_tax_label');
  }
  public get total(){
    return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label');
  }
  public get finishButton(){
    return $('#finish');
  }
  public get cancleButton(){
    return $('#cancel');
  }
  async getPrice(){
    return await this.price.getText();
  }
  async getItemTotal(){
     return await this.itemTotal.getText();
  }
  async getTax(){
    return await this.tax.getText();
  }
  async getTotal(){
    return await this.total.getText();
  }
  async clickCancelButton(){
    await this.cancleButton.click();
  }
  async clickFinishButton(){
    await this.finishButton.click();
  }
}
export default new CheckOverviewPage();