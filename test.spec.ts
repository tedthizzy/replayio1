import { test, expect } from '@playwright/test';

test('Record HTML timeline of x.com', async ({ page }) => {
  await page.goto('https://x.com');
  await page.waitForTimeout(5000); // Wait 5 seconds to ensure all content loads
  // Add further interactions if needed
});
