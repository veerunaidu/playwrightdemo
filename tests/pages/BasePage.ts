import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async fill(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async getText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  async waitForElement(selector: string): Promise<Locator> {
    const locator = this.page.locator(selector);
    await locator.first().waitFor({ state: 'visible' });
    return locator;
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }
}
