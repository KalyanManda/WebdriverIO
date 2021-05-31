import { Given, When, Then } from '@cucumber/cucumber';
import ProductPage from '../pageobjects/product.page'; 
import HomePage from '../pageobjects/home.page';
import LandingPage from '../pageobjects/landing.page';
import CheckoutPage from '../pageobjects/checkout.page';
import productPage from '../pageobjects/product.page';
const pages = {    
    landing : LandingPage,
    home : HomePage,
    product : ProductPage,
    checkout : CheckoutPage
}

Given(/^I open the product web ([^"]*)?$/, async (url) => {
    browser.url(`http://automationpractice.com/index.php${url}`);
});

Given(/^I click on ([^"]*)? button$/, async (button) => {
    if(button == "SignIn"){
    await HomePage.clickSignIn()
    }
    else if(button == "AddtoCart"){
        await ProductPage.clickAddtoCart();
    }
    else if(button == "Proceed to Checkout"){
        await pages["checkout"].open();
    }
    else if (button =="Register")
    {
        await LandingPage.clickRegister();
    }
});

When(/^I enter ([^"]*)? for Account creation$/, async (email) => {
    await LandingPage.register(email)
});

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


Then(/^I should see an error message$/, async()=>{
    await LandingPage.checkInvalidEmailErrorMessage();
})

Then(/^I should see ([^"]*)?$/, async (message) => {    
    if(message =="Product successfully added to your shopping cart")
    {
        await (await ProductPage.successMessage).waitForExist({ timeout: 5000})
        await expect(ProductPage.successMessage).toBeDisplayed();    
    }
    else if(message == "Faded Short Sleeve T-shirts")
    {
        await (await ProductPage.cartDescription).waitForExist({ timeout: 5000})
        await expect(ProductPage.cartDescription).toBeDisplayed();   
    }
    else if(message == "$16.40")
    {
        await (await ProductPage.cartPrice).waitForExist({ timeout: 5000})
        await expect(ProductPage.cartPrice).toBeDisplayed();   
    }
});

Then(/^I should see "([^"]*)?" as "([^"]*)"?$/, async (type , message) => {    
    if(type == "ProductName")
    {
        await (await ProductPage.cartDescription).waitForExist({ timeout: 5000})
        await expect(ProductPage.cartDescription).toBeDisplayed();   
        
        const span = $('//*[@class="cart_description"]/p/a[contains(text(),"'&message&'")]');
        await expect(await ProductPage.cartDescription).toHaveTextContaining(message);        
    }
    else if(type == "ProductPrice")
    {
        await (await ProductPage.cartPrice).waitForExist({ timeout: 5000})
        await expect(ProductPage.cartPrice).toBeDisplayed();   
        //const span = $('//*[@class="cart_total"]/span[contains(text(),"'&message&'")]');
        await expect(await productPage.cartPrice).toHaveTextContaining(message);        
    }
});
Then(/^I delete the added product from the cart/,async()=>{

    CheckoutPage.clickDelete();
});

Then(/^I fill the form with ([^"]*)?, ([^"]*)?, ([^"]*)?, ([^"]*)?, ([^"]*)?, ([^"]*)?, ([^"]*)?, ([^"]*)?/,    
        async(firstName, lastName, password, address, city, state, zipcode, mobile)=>{

    LandingPage.enterFirstName(firstName);
    LandingPage.enterlastName(lastName);
    LandingPage.enterPassword(password);
    LandingPage.enterAddress(address);
    LandingPage.enterCity(city);
    LandingPage.selectStateByText(state);
    LandingPage.enterZipcode(zipcode);
    LandingPage.entermobile(mobile);
    
});
Then(/^If the email entered is (\w+) I should see the (\w+)$/, async(emailType, Element)=>{
    if(emailType == "Invalid")
    {       
        await LandingPage.checkInvalidEmailErrorMessage(Element);        
    }
    else if(emailType =="Valid")
    {
        await expect(await LandingPage.yourPersonalInfoForm).toBeDisplayed();
    }
})

Then(/^Home page has ([^"]*)? and ([^"]*)? displayed$/, async(firstName, lastName)=>{
    HomePage.verifyProfileHasFirstandLastNames(firstName, lastName);
})


Given(/^I login to the application using ([^"]*)? and ([^"]*)?$/, async(username, password)=>{
    await LandingPage.login(username,password);
})


Then(/^Login ([^"]*)?$/, async(status)=>{
    if(status== "success")
    {
        await (await LandingPage.validlogin).waitForExist({ timeout: 5000})
        await expect(await LandingPage.validlogin).toHaveTextContaining("My account");
        await HomePage.clickSignOut();
    }
    else if (status=="Invalid password")
    {
        await expect(await LandingPage.invalidloginError).toHaveTextContaining("Invalid password");
    }
    else if (status=="Invalid email address")
    {
        await expect(await LandingPage.invalidloginError).toHaveTextContaining("Invalid email address");
    }
    else if (status=="Authentication failed")
    {
        await expect(await LandingPage.invalidloginError).toHaveTextContaining("Authentication failed");
    }
})


Then(/^Logout of the application?$/, async(status)=>{
    await HomePage.clickSignOut();
})