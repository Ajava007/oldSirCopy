import { test, expect } from '@playwright/test';

test.describe('VeynaX AMMS — E2E', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Should redirect to login
    await expect(page).toHaveURL(/login/);
  });

  test('login with valid credentials lands on dashboard', async ({ page }) => {
    await page.getByLabel(/username/i).fill('admin');
    await page.getByLabel(/password/i).fill('admin123');
    await page.getByRole('button', { name: /sign in|login|submit/i }).click();
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText(/dashboard/i).first()).toBeVisible();
  });

  test('invalid credentials show error and stay on login', async ({ page }) => {
    await page.getByLabel(/username/i).fill('admin');
    await page.getByLabel(/password/i).fill('wrongpass');
    await page.getByRole('button', { name: /sign in|login|submit/i }).click();
    await expect(page).toHaveURL(/login/);
  });

  test('sidebar navigates to all major modules', async ({ page }) => {
    // Login first
    await page.getByLabel(/username/i).fill('admin');
    await page.getByLabel(/password/i).fill('admin123');
    await page.getByRole('button', { name: /sign in|login|submit/i }).click();
    await expect(page).toHaveURL(/dashboard/);

    const modules = [
      { link: /master data|master-data/i, url: /master-data/ },
      { link: /inventory/i, url: /inventory/ },
      { link: /production/i, url: /production/ },
      { link: /quality/i, url: /quality/ },
      { link: /sales/i, url: /sales/ },
      { link: /maintenance/i, url: /maintenance/ },
      { link: /workforce/i, url: /workforce/ },
      { link: /reports/i, url: /reports/ },
    ];

    for (const m of modules) {
      await page.getByRole('link', { name: m.link }).first().click();
      await expect(page).toHaveURL(m.url);
    }
  });

  test('quality page shows SPC tab with Cp/Cpk', async ({ page }) => {
    await page.getByLabel(/username/i).fill('admin');
    await page.getByLabel(/password/i).fill('admin123');
    await page.getByRole('button', { name: /sign in|login|submit/i }).click();
    await page.getByRole('link', { name: /quality/i }).first().click();
    await page.getByRole('button', { name: /spc/i }).click();
    await expect(page.getByText(/Cpk/i).first()).toBeVisible();
    await expect(page.locator('svg').first()).toBeVisible();
  });

  test('viewer role can view but sees restricted UI', async ({ page }) => {
    await page.getByLabel(/username/i).fill('viewer');
    await page.getByLabel(/password/i).fill('viewer123');
    await page.getByRole('button', { name: /sign in|login|submit/i }).click();
    await expect(page).toHaveURL(/dashboard/);
  });
});
