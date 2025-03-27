import { Page, Locator } from "@playwright/test";

export class ProductsInventoryPage {
    readonly productsHeading: Locator;
    readonly addToCart: (inventoryItem: string) => Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;
    readonly inventoryItems: Locator;
    readonly productSortDropdown: Locator;
    readonly productPrice: Locator;
    readonly productName: Locator;
    constructor(page: Page) {
        this.productsHeading = page.locator('.title:has-text("Products")')
        this.addToCart = (inventoryItem: string) =>
            page.locator('.inventory_item').filter({ hasText: `${inventoryItem}` }).locator('button');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.inventoryItems = page.locator('.inventory_item');
        this.productSortDropdown = page.getByRole('combobox');
        this.productPrice = page.locator('.inventory_item_price')
        this.productName = page.locator('.inventory_item_name')
    }
    async addItemToCart(inventoryItem: string) {
        await this.addToCart(inventoryItem).click();
    }
    async clickSortDropdown() {
        await this.productSortDropdown.click();
    }
}

