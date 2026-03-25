import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
  public get inputUsername () {
    return $('#user-name');
  }

  public get inputPassword () {
    return $('#password');
  }

  public get loginButton () {
    return $('#login-button');
  }

  public get errorMessage(){
    return $('#login_button_container > div > form > div.error-message-container.error > h3')
  }

  public get successMessage(){
    return $('#item_4_title_link > div')
  }

  public async login (username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }

  async getErrorMessage(){
    return await this.errorMessage.getText();
  }

  async getSuccessMessage(){
    return await this.successMessage.getText();
  }

  public open () {
    return super.open();
  }
}

export default new LoginPage();
