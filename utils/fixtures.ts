import { test as base } from "@playwright/test";
import { ProductsInventoryPage } from "../page-object/products-inventory-page";
import { LoginPage } from "../page-object/saucedemo-login-page";
import { YourCartPage } from "../page-object/your-cart-page";

type Pages = {
  loginPage: LoginPage;
  productsInventoryPage: ProductsInventoryPage;
  yourCartPage: YourCartPage
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsInventoryPage: async ({ page }, use) => {
    await use(new ProductsInventoryPage(page));
  },
  yourCartPage: async ({ page }, use) => {
    await use(new YourCartPage(page));
  },
});

export { expect } from "@playwright/test";