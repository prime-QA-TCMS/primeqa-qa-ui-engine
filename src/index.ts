import type { Locator, Page } from '@playwright/test';

export interface UiEngineOptions {
  baseUrl: string;
}

export class UiEngine {
  constructor(
    public readonly page: Page,
    public readonly options: UiEngineOptions,
  ) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(new URL(path, this.options.baseUrl).toString());
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async click(selector: string): Promise<void> {
    await this.locator(selector).click();
  }

  async fill(selector: string, value: string): Promise<void> {
    await this.locator(selector).fill(value);
  }

  async text(selector: string): Promise<string | null> {
    return this.locator(selector).textContent();
  }

  async screenshot(path?: string): Promise<Buffer> {
    return this.page.screenshot(path ? { path, fullPage: true } : { fullPage: true });
  }
}
