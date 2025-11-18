import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a given path, default is root.
   */
  async goto(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Waits for a locator to become visible.
   */
  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }
}
