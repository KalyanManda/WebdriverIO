import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () { return $('//*[contains(text(),"Sign in")]')}
    get btnDelete () {return $('//*[@class="cart_delete text-center"]//a[@title="Delete"]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
     async clickDelete () {        
        await (await this.btnDelete).click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?controller=order');
    }

}

export default new CheckoutPage();
