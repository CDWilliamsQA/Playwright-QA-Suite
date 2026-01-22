import { test, expect } from '@playwright/test';

test.describe('Smoke suite - basic validation', () => {
  test('should open Playwright homepage and verify title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
