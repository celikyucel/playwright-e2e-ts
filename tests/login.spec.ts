import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { credentials } from '../utils/testData';
import { maskPassword } from '../utils/helpers';

test.describe('Login - OrangeHRM (TS)', () => {
  test('@smoke valid login should navigate to dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await loginPage.assertUserIsLoggedIn();
  });

  test('@regression invalid login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(credentials.invalid.username, credentials.invalid.password);
    await loginPage.assertErrorIsVisible();

    test.info().annotations.push({
      type: 'note',
      description: `Tried invalid login with username "${credentials.invalid.username}" and password "${maskPassword(credentials.invalid.password)}".`
    });
  });

  test('@regression empty credentials should show validation messages', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('', '');

    const validationMessages = page.locator('.oxd-input-field-error-message');
    await expect(validationMessages.first()).toBeVisible();
  });
});
