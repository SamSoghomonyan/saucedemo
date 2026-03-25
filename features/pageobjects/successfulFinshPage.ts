import Page from "./page.ts";

class SuccessfulFinishPage extends Page { // Ուղղեցի նաև անվան մեջ Finish տառասխալը

  // Օգտագործիր $(...) էլեմենտը սահմանելու համար
  public get successfulMessage() {
    return $('#checkout_complete_container > h2');
  }

  public get dispatched() {
    return $('#checkout_complete_container > div');
  }

  async getSuccessfulMessage() {
    return await this.successfulMessage.getText();
  }
  async getDispatched() {
    return await this.dispatched.getText();
  }
}

export default new SuccessfulFinishPage();