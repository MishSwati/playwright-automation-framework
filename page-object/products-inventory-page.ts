import { Page,Locator } from "@playwright/test";

export class ProductsInventoryPage {
    public productsLabel : Locator;
    constructor(page:Page) {
        this.productsLabel =page.locator('.title:has-text("Products")')
    }
}