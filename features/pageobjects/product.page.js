import BasePage from './base.page';

var productName
var productPrice
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get lblProductName () { return $('//*[@id="center_column"]//h1[@itemprop="name"]')}
    get lblProductPrice () { return $('#our_price_display')}
    get btnAddtoCart () { return $('//button/*[contains(text(),"Add to cart")]/..')}
    get successMessage() {return $('div.layer_cart_product')}
    get btnProceedtoCheckout() {return $('//div[@class="button-container"]/span')}
    get cartDescription() {return $('//*[@class="cart_description"]/p/a')}
    get cartPrice() {return $('//*[@class="cart_total"]/span')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async clickAddtoCart () {        
        await (await this.btnAddtoCart).click();
    }

    async clickProceedtoCheckout () {    
        await (await this.btnProceedtoCheckout).waitForExist({ timeout: 5000})
        await (await this.btnProceedtoCheckout).click();
    }
    async getProductInfo(){
        productName = await this.lblProductName.getText();
        productPrice = await this.lblProductPrice.getText();
        console.log(productName);
        console.log(productPrice);
    }
    async clickButton(button) {        
        await (await this.button).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?id_product=1&controller=product');
    }

}

export default new ProductPage();
