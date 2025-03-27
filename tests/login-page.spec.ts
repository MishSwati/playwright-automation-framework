import testdata from "../test-data/data.json"
import { test, expect } from "../utils/fixtures";

test.describe('Swag Labs Login Page', async () => {

    test(`verify login with ${testdata.username}`, async ({ productsInventoryPage, page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await expect(productsInventoryPage.productsHeading).toBeVisible();
    })

})