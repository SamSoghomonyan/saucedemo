class HeaderComponent {
  public get cartIcon() {
    return $('#shopping_cart_container a')
  }

  async openCart() {
    await this.cartIcon.click()
  }
}