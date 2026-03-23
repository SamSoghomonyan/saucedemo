Feature: Cart Management

  Scenario: Add a specific product to the shopping cart
    Given I am on the inventory page
    When I click "Add to cart" for "Sauce Labs Backpack"
    Then the shopping cart badge should show "1"
    And the button for "Sauce Labs Backpack" should change to "Remove"