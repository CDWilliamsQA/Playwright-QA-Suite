import { test, expect } from '@playwright/test';

test('Regression: page has a visible heading', async ({ page }) => {
  await page.goto('/');
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});
