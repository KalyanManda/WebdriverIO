Feature: Automation Practice Cart
    As a customer
    Add a product to the cart
	Proceed to the checkout page and Validate on the payments page if the product details are correct.

    Scenario: Verify the added item in the cart summary
        Given I open the product web <url>
        And I click on AddtoCart button
        Then I should see Product successfully added to your shopping cart
        Given I am on the checkout page
        Then I should see "ProductName" as <ProductName>
        Then I should see "ProductPrice" as <ProductPrice>
        Then I delete the added product from the cart

    Examples:
      | url | ProductName | ProductPrice |
      |?id_product=1&controller=product | "Faded Short Sleeve T-shirts"   | "$16.51" |
      |?id_product=3&controller=product | "Printed Dress"   | "$26.00"  |
