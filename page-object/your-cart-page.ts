import { Page, Locator } from '@playwright/test';

export class YourCartPage {
  readonly cartItemName: Locator;
  constructor(page: Page) {
    this.cartItemName = page.locator('.inventory_item_name');
  }
}