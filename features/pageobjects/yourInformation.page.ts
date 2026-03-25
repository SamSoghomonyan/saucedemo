import { $ } from '@wdio/globals';
import Page from './page';
class YourInformationPage extends Page {
  public pageName(){
    return $('#header_container > div.header_secondary_container > span');
  }
  public get firstName(){
    return $('#first-name');
  }
  public get lastName(){
    return $('#last-name');
  }
  public get zip(){
    return $('#postal-code');
  }
  public get continueButton(){
    return $('#continue');
  }
  public get cancelButton(){
    return $('#cancel');
  }
  public get errMessage(){
    return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3');
  }
  async getPageName(){
    return await this.pageName().getText();
  }

  async addName(name:string){
    await this.firstName.clearValue();
    await this.firstName.setValue(name);
  }
  async addLastName(lastname:string){
    await this.lastName.clearValue();
    await this.lastName.setValue(lastname);
  }
  async addZipCode(zipCode:number){
    await this.zip.clearValue();
    await this.zip.setValue(zipCode);
  }
  async clickContinueButton(){
    await this.continueButton.waitForClickable();
    await this.continueButton.click();
  }
  async clickCancelButton(){
    return await this.cancelButton.click();
  }
  async getErrorMessage(){
    await this.errMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Error message was not displayed'
    });

    return await this.errMessage.getText();
  }
}

export default new YourInformationPage();