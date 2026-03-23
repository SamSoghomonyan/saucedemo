import { $ } from '@wdio/globals'
import Page from './page';
class YourInformationPage extends Page {
  public get firstName(){
    return $('#first-name')
  }
  public get lastName(){
    return $('#last-name')
  }
  public get zip(){
    return $('#postal-code')
  }
  public get continueButton(){
    return $('#continue')
  }
  public get cancelButton(){
    return $('#cancel')
  }
  async fillCheckoutForm(name: string, lastname: string, zipCode: string) {
    await this.firstName.setValue(name);
    await this.lastName.setValue(lastname);
    await this.zip.setValue(zipCode);
    await this.continueButton.click();
  }
  async clickContinueButton(){
    await this.continueButton.click()
  }
  async clickCancelButton(){
    return await this.cancelButton.click()
  }
}

export default new YourInformationPage();