import { expect, test } from "@playwright/test";
import testdata from "../test-data/data.json"
import { LoginPage } from "../page-object/login-page";
import { ProductsInventoryPage } from "../page-object/products-inventory-page";

test.describe('Swag Labs Login Functionality',async()=>{
    let loginPage : LoginPage;
    let productsInventoryPage : ProductsInventoryPage;
    
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        productsInventoryPage = new ProductsInventoryPage(page);
        await page.goto(testdata.url);
        const pageTitle = await page.title();
        expect(pageTitle).toBe(testdata.expectedTitle);
        
    })
    test('verify login to the application',async({page})=>{
        await loginPage.usernameInput.fill(testdata.username);
        await loginPage.passwordInput.fill(testdata.password);
        await loginPage.loginButton.click();
        await expect (productsInventoryPage.productsLabel).toBeVisible();
    })
})