import { test, expect } from './fixtures';

test.describe('Page Tests', () => {
  test('should navigate to example.com', async ({ page }) => {
    await page.goto('https://example.com');
    expect(page.url()).toContain('example.com');
  });

  test('should verify page loads with title', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBeDefined();
    expect(title.length).toBeGreaterThan(0);
  });

  test('should interact with page elements', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Get all links on the page
    const links = await page.locator('a').count();
    expect(links).toBeGreaterThan(0);
  });
});

test.describe('Navigation Tests', () => {
  test('should verify page is accessible', async ({ page }) => {
    const response = await page.goto('https://example.com');
    expect(response?.status()).toBe(200);
  });

  test('should check page content exists', async ({ page }) => {
    await page.goto('https://example.com');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
    expect(content?.length).toBeGreaterThan(0);
  });
});
