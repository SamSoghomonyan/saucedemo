import { $ } from '@wdio/globals'
import Page from './page';

class ProductsPage extends Page {
  public addToCartButton() {
    return $(`#add-to-cart-sauce-labs-backpack`)
  }

  async addItemToCart() {
    await this.addToCartButton().click()
  }
}

export default new ProductsPage()
