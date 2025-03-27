import { Browser, chromium, expect, Page } from '@playwright/test';
import { ProductsInventoryPage } from '../../page-object/products-inventory-page';

const users = [
  { username: 'standard_user', password: 'secret_sauce', storageState: 'auth/standard_user.json' },
  { username: 'problem_user', password: 'secret_sauce', storageState: 'auth/problem_user.json' },
  { username: 'performance_glitch_user', password: 'secret_sauce', storageState: 'auth/performance_glitch_user.json' },
];

export async function globalSetup() {
  console.log('Running global setup...');
  for (const user of users) {
    const browser: Browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[name="user-name"]').fill(user.username);
    await page.locator('input[name="password"]').fill('secret_sauce');
    await page.locator('input[name="login-button"]').click();
    let productsInventoryPage: ProductsInventoryPage;
    productsInventoryPage = new ProductsInventoryPage(page);
    await expect(productsInventoryPage.productsHeading).toBeVisible();
    await page.context().storageState({ path: `tests/auth/${user.username}_LoginState.json` });
    await browser.close();
  }
};

export default globalSetup;
