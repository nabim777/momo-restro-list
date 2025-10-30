Feature: Login
 As an user
 I want to log into my account
 So that I can view a list of restaurants
    

  Scenario: user logs in with a valid username and valid password
    Given user has navigated to the login page
    When user logs in with username "max" and password "maxss" using webUI
    Then user should be redirected to the webUI homepage


  Scenario Outline: user logs in with an invalid username and incorrect password
    Given user has navigated to the login page
    When user logs in with username "<username>" and password "<password>" using webUI
    Then user should get "Invalid email or password. Please try again." message
    Examples:
      | username  | password |
      | Spiderman | spidy123 |
      | Ironman   | iron123  |
      | Aquaman   | aqua123  |
      | Batman    | bat123   |
