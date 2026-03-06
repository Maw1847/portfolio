import { test, expect } from '@playwright/test';

test('has root-outlet', async ({ page }) => {
  await page.goto('/');

  // Expect router-outlet to exist.
  const outlet = page.locator('router-outlet');
  expect(outlet).toBeTruthy();
});
