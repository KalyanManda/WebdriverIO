import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () { return $('//*[contains(text(),"Sign in")]')}
    get btnProfile () {return $('//*[@title="View my customer account"]/span')}
    get btnSignOut () { return $('//*[@title="Log me out"] ')}

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickSignIn () {        
        await (await this.btnSignIn).click();
    }

    async clickSignOut () {              
        await (await this.btnSignOut).click();
    }


    async verifyProfileHasFirstandLastNames(firstName,lastName){
        await expect(await this.btnProfile).toHaveTextContaining(firstName);
        await expect(await this.btnProfile).toHaveTextContaining(lastName);
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }

}

export default new HomePage();
