import { $ } from '@wdio/globals'
import Page from './page';

class ProductsPage extends Page {
  public addToCartButton(item: string) {
    return $(`#add-to-cart-${item}`)
  }

  async addItemToCart(item: string) {
    await this.addToCartButton(item).click()
  }
}

export default new ProductsPage()
