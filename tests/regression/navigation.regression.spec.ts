import { test, expect } from '@playwright/test';

test('Regression: homepage loads', async ({ page }) => {
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);
});
