import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get REGISTER PAGE link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the REGISTER PAGE link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
  
  // Wait for page to load properly
  await page.waitForURL('https://material.playwrightvn.com/01-xpath-register-page.html');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
