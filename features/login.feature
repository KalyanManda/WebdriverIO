Feature: Automation Practice Cart
    As a customer
    Add a product to the cart
	Proceed to the checkout page and Validate on the payments page if the product details are correct.


Scenario Outline: Login User to the application - +ve and -ve scenarios

    Given I am on the landing page
    And I login to the application using <username> and <password>
    Then Login <status>
    Examples: 
    |username|password|status|
    |kalyan@gmail.com|12345|Authentication failed|
    |kalyan@gmail.com|1|Invalid password|
    |kalyan@gmail|12345|Invalid email address|
    |kalyan@g.com|12345|success|

Scenario Outline: Login User to the application and check if the profile has first and last name 

    Given I am on the landing page
    And I login to the application using <username> and <password>    
    And Home page has <FirstName> and <LastName> displayed 
    Then Login <status>
    
    Examples: 
    |username|password|status|FirstName|LastName|
    |kalyan@g.com|12345|success|K|M|



Scenario Outline: Login User to the application and check if the profile has first and last name 

    Given I am on the landing page
    And I login to the application using <username> and <password>    
    Then Login <status>
    And I login to the application using <username> and <password>    
    Then Login <status>

    Examples: 
    |username|password|status|FirstName|LastName|
    |kalyan@g.com|12345|success|K|M|


