import { Page, Locator } from '@playwright/test';

export class LoginPage {
  public usernameInput : Locator;
  public passwordInput : Locator;
  public loginButton : Locator;
  constructor(page: Page) {
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByPlaceholder('Password',{exact:true});
    this.loginButton = page.getByRole('button',{name:'Login'});
  }
}