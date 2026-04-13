import { Page } from '@playwright/test';

export async function waitForNavigation(page: Page, action: () => Promise<void>): Promise<void> {
  await Promise.all([
    page.waitForNavigation(),
    action(),
  ]);
}

export function getRandomString(length: number = 8): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function takeScreenshot(page: Page, fileName: string): Promise<void> {
  await page.screenshot({ path: `./screenshots/${fileName}.png` });
}

export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
