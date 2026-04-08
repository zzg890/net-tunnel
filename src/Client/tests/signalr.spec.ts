import { test, expect } from '@playwright/test';

test('signalr: send and receive message', async ({ page }) => {
  // Client served at 4200 in CI and locally via `npm run serve-dist`.
  await page.goto('http://localhost:4200');

  // Wait for the app root to be present
  await page.waitForSelector('app-root');

  // Click the send button which invokes SignalR SendMessage
  await page.click('button');

  // Assert that the message appears in the list
  await expect(page.locator('ul li')).toContainText('client: hello from client');
});
