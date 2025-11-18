import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorAlert: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorAlert = page.locator('.oxd-alert-content-text');
    this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Perform login with the given credentials.
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertUserIsLoggedIn(): Promise<void> {
    await this.dashboardHeader.waitFor({ state: 'visible' });
  }

  async assertErrorIsVisible(): Promise<void> {
    await this.errorAlert.waitFor({ state: 'visible' });
  }
}
