Feature: Sign-up
  As a user
  I want to sign up with valid information
  So that I can access the restaurant list

  Scenario: user submits the sign-up form with all fields empty
    Given user has navigated to the sign-up page
    When user submits the sign-up form with all fields empty
    Then user should get "Name is required." message
    And user should get "Email is required." message
    And user should get "Password is required." message
    And user should remain on the sign-up page