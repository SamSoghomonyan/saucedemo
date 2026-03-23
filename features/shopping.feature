Feature: Buy products on SauceDemo

  Scenario: User completes a purchase with validation check
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I add "sauce-labs-backpack" to the cart
    And I open the cart and continue shopping
    And I add "sauce-labs-bike-light" to the cart
    And I open the cart and proceed to checkout
    And I try to continue without filling checkout info
    Then I should see a checkout error message
    When I fill checkout info with first name "John", last name "Doe", zip "12345"
    And I continue checkout
    And I finish the order
    Then I should see a success message "Thank you for your order!"