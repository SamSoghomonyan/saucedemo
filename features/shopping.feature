Feature: Buy products on SauceDemo
  Background:
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    And I click "Add to cart" for "Sauce Labs Backpack"
    And I click cart icon
    And I click on the shopping cart icon And I click the "Checkout" button

  Scenario: User completes a purchase with validation check
    And I try to continue without filling name info
    And I try to continue without filling last name info
    And I try to continue without filling zip code info
    When I fill checkout info with first name "John", last name "Doe", zip "12345"
    Then I click Continue
    And I should see shopping dettalis
    And i click finish button
    Then I should see a success message "Thank you for your order!"