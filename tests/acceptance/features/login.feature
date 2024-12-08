Feature: login
 As a admin
 I want to be able to log into my account
 So that I can have list of resturant

  Background:
    Given the admin has navigated to the login page


  Scenario: admin logs in with valid username and valid password
    When admin logs in with username "admin" and password "admin" using webUI
    Then admin should be redirected to the webUI homepage


  Scenario Outline: admin logs in with invalid username and incorrect password
    When admin logs in with username "<username>" and password "<password>" using webUI
    Then admin should get "Invalid email or password. Please try again." message
    Examples:
      | username  | password |
      | Spiderman | spidy123 |
      | Ironman   | iron123  |
      | Aquaman   | aqua123  |
      | Batman    | bat123   |
