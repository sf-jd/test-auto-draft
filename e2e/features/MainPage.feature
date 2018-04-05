@ignore
Feature: Basic Login/Logout flows

@smoke
Scenario Outline: Login to page
  Given I go to the homepage
  And I click on the login button
  And I input my username <user> and password <password>
  And I click the submit button
  Then I can see the dashboard
Examples:
| user               | password   |
| 'test@testuser.com' | 'password'  |
@smoke
Scenario: Logout from page
  Given I can see the dashboard
  And I click on my username on the topnav
  And I click on the sign out button
  Then I am redirected to the main page