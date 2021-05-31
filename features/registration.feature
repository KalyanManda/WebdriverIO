Feature: To Test Automation Pratice website


  Scenario Outline: Email address field error validation

    Given I am on the home page
    And I click on SignIn button
    And I am on the landing page
    When I enter <email> for Account creation
    Then If the email entered is <emailType> I should see the <Element>
    Examples:
      | email | emailType | Element |
      |kalyan | Invalid   | error |
      |kal@g.com| Valid   | Form  |
      |kalyan2@mail.com|Invalid| alreadyregistered|

Scenario Outline: Register User to the application - Note : please enter new email everytime the script is executed.

    Given I am on the home page
    And I click on SignIn button
    And I am on the landing page
    When I enter <emailid> for Account creation
    Then If the email entered is Valid I should see the Form
    Then I fill the form with <FirstName>, <LastName>, <Password>, <Address>, <City>, <State>, <ZipCode>, <MobileNumber>
    And I click on Register button 
    Then Login <status>

    Examples:
    |emailid|FirstName|LastName|Password|Address|City|State|ZipCode|MobileNumber|status|
    |kalyan5@mail.com|Kalyan   |Manda   |12345  |1234567 |Ohio|1|12345  |9012345678|success|