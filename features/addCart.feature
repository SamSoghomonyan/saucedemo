Feature: Add cart page

  Background:
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"

  Scenario: Verify cart operations and navigation from the cart page

    Then I click "Add to cart" for "Sauce Labs Backpack"
    And I click cart icon
    Then i should see the item in cart list

    When I click Remove button
    Then the cart should be empty
    And I click "Continue Shopping"
    And I click "Add to cart" button again

    When I click on the shopping cart icon And I click the "Checkout" button
    Then I should see the "Checkout: Your Information" page

