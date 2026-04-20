import { test, expect } from '@playwright/test';

test('homepage shows title', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page.locator('h1')).toHaveText('net-tunnel client');
});
