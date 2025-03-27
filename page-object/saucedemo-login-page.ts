import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  constructor(page: Page) {
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[type="submit"]');
  }
}