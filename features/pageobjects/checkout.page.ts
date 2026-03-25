import { $ } from '@wdio/globals';
import Page from './page';

class CheckoutPage extends Page {
  public get checkoutButton() {
    return $('#checkout');
  }
  async clickCheckoutButton(){
    return this.checkoutButton.click();
  }
}
export default new CheckoutPage();