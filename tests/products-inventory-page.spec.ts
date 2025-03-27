import { test, expect } from "../utils/fixtures";
import testdata from "../test-data/data.json"

test.describe('Swag Labs Products Inventory Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
    });

    test('verify adding a product to the cart', async ({ productsInventoryPage }) => {
        await productsInventoryPage.addItemToCart(testdata.productName);
        await expect(productsInventoryPage.shoppingCartBadge).toHaveText('1');
    });

    test('verify item in shopping cart', async ({ productsInventoryPage, yourCartPage }) => {
        await productsInventoryPage.addItemToCart(testdata.productName);
        await productsInventoryPage.shoppingCartLink.click();
        await expect(yourCartPage.cartItemName).toHaveText(testdata.productName);
    });

    test('verify total items in inventory', async ({ productsInventoryPage }) => {
        const totalItems = await productsInventoryPage.inventoryItems.count();
        expect(totalItems).toBe(6);

    });

    test('verify that products are sorted by price high-to-low', async ({ productsInventoryPage }) => {
        await productsInventoryPage.clickSortDropdown();
        await productsInventoryPage.productSortDropdown.selectOption({ label: 'Price (high to low)' });
        const prices = await productsInventoryPage.productPrice.allTextContents();
        const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
        for (let i = 0; i < numericPrices.length - 1; i++) {
            console.log(numericPrices[i]);
            console.log(numericPrices[i + 1]);
            expect(numericPrices[i]).toBeGreaterThanOrEqual(numericPrices[i + 1]);
        }

    });

    test('verify that products are sorted by name Z-to-A', async ({ productsInventoryPage }) => {
        await productsInventoryPage.clickSortDropdown();
        await productsInventoryPage.productSortDropdown.selectOption({ label: 'Name (Z to A)' });
        const names = await productsInventoryPage.productName.allTextContents();
        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
        }
    });
})