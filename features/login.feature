Feature: The login

  Scenario Outline: Invalid parameters login
    Given I am on the login page
    When I login with "<username>" and "<password>"

    Examples:
      | username      | password     |
      | invalid_user  | wrong_pass   |

  Scenario Outline: Success login
    Given I am on the login page
    When I login with "<username>" and "<password>"

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
