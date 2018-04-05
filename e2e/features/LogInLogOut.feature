Feature: LogIn/LogOut

@LogInLogOut
Scenario Outline: Login to page using SignUp then Logout
  Given I go to the homepage
  And I click on the sign up button
  And I input my username <user> and password <password>
  And I click the submit button
  And I can see the dashboard
  And I click on my username on the topnav
  And I click on the sign out button
  Then I am redirected to the main page

Examples:
| user               | password   |
| 'loginsignup@log.com'| 'password'   |
| 'loginsignup1@log.com'| 'password'   |
| 'loginsignup2@log.com'| 'password'   |
| 'loginsignup3@log.com'| 'password'   |
| 'loginsignup4@log.com'| 'password'   |
| 'loginsignup5@log.com'| 'password'   |
| 'loginsignup6@log.com'| 'password'   |
| 'loginsignup7@log.com'| 'password'   |
| 'loginsignup8@log.com'| 'password'   |
| 'loginsignup9@log.com'| 'password'   |
| 'loginsignup10@log.com'| 'password'   |
| 'loginsignup11@log.com'| 'password'   |
| 'loginsignup12@log.com'| 'password'   |
| 'loginsignup13@log.com'| 'password'   |
