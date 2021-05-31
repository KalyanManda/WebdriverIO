import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {return $('#email_create')}
    get btnCreateAccount() {return $('#SubmitCreate')}
    get invalidEmailErrorMsg () { return $('//*[contains(text(),"Invalid email address")]')}
    get registeredEmailErrorMsg () { return $('//*[contains(text(),"email address has already been registered")]')}

    get inputloginUsername() {return $('#email')}
    get inputloginPassword() {return $('#passwd')}
    get btnloginSignIn() {return $('#SubmitLogin')}
    get invalidloginError() {return $('//div[@class="alert alert-danger"]//li')}
    get validlogin() {return $('//span[@class="navigation_page"]')}
    //Personal Information 
    get yourPersonalInfoForm() {return $('#account-creation_form')}
    get titleMrRadio() { return $('#id_gender1')}

    get firstNameTextBox() {return $('#customer_firstname')}
    get lastNameTextBox() {return $('#customer_lastname')}
    get pwdTextBox() {return $('#passwd')}

    get inputAddress() {return $('#address1')}
    get inputCity() {return $('#city')}
    get selectState() {return $('#id_state')}
    
    get inputZipCode() {return $('#postcode')}
    get inputMobile() {return $('#phone_mobile')}
    get btnRegister() {return $('#submitAccount')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (email) {
        await (await this.inputEmail).setValue(email);        
        await (await this.btnCreateAccount).click();
    }
    async login (username, password) {
        await (await this.inputloginUsername).setValue(username);        
        await (await this.inputloginPassword).setValue(password);        
        await (await this.btnloginSignIn).click();
    }
    
    async enterlastName(lastName){        
        await(await this.lastNameTextBox).setValue(lastName);
    }
    async enterFirstName(firstName){
        await(await this.firstNameTextBox).setValue(firstName);      
    }
    async enterPassword(password){    
        await(await this.pwdTextBox).setValue(password);       
    }

    async enterAddress(address){        
        await(await this.inputAddress).setValue(address);        
    }
    async selectStateByText(state){   
        const selectBox = $('#id_state');     
        await(await selectBox).selectByAttribute('value',state);        
    }
    async enterCity(city){
        await(await this.inputCity).setValue(city);  
    }
    async enterZipcode(zipcode){
        await(await this.inputZipCode).setValue(zipcode);  
    }
    async entermobile(mobile){
        await(await this.inputMobile).setValue(mobile);  
    }

    async clickRegister () {  
        await (await this.btnRegister).waitForExist({ timeout: 5000})
        await (await this.btnRegister).click();
    }

    async checkInvalidEmailErrorMessage(element){
        //await (await this.invalidEmailErrorMsg).waitForExist({ timeout: 5000})
        if(element == "error")
        {
            await expect(await this.invalidEmailErrorMsg).toBeDisplayed();
        }
        else if (element =="alreadyregistered")
        {
            await expect(await this.registeredEmailErrorMsg).toBeDisplayed();
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?controller=authentication&back=my-account');
    }

}

export default new LandingPage();
