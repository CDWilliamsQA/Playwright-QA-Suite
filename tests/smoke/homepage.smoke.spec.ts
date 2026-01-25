import { test, expect } from '@playwright/test';

test('Smoke: homepage loads and has a title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/); // any non-empty title
});
