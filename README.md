# Playwright Automation Framework with TypeScript

A modern, scalable Playwright automation testing framework built with TypeScript, following the Page Object Model (POM) pattern.

## Project Structure

```
playwrightdemo/
├── tests/
│   ├── pages/           # Page Object Models
│   │   ├── BasePage.ts  # Base class for all pages
│   │   └── LoginPage.ts # Example page object
│   ├── fixtures/        # Test fixtures and setup
│   │   └── fixtures.ts  # Custom test fixtures
│   ├── utils/           # Utility functions
│   │   └── helpers.ts   # Helper functions
│   └── example.spec.ts  # Example test file
├── playwright.config.ts # Playwright configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── README.md           # This file
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests in headless mode
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Debug tests
```bash
npm run test:debug
```

### Run specific test by name
```bash
npm run test:specific <pattern>
```

### View test report
```bash
npm run report
```

## Project Configuration

### playwright.config.ts
Contains test configuration including:
- Test directory path
- Browser types (Chrome, Firefox, Safari)
- Reporter settings (HTML report)
- Screenshots and video recording on failure
- Retry settings
- Custom base URL

### tsconfig.json
TypeScript compiler options for strict type checking and modern JavaScript support.

## Creating New Tests

### 1. Create a Page Object
```typescript
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyPage extends BasePage {
  readonly myElement = 'selector';

  constructor(page: Page) {
    super(page);
  }

  async myAction(): Promise<void> {
    await this.click(this.myElement);
  }
}
```

### 2. Add to Fixtures (tests/fixtures/fixtures.ts)
```typescript
type TestFixtures = {
  myPage: MyPage;
};

export const test = base.extend<TestFixtures>({
  myPage: async ({ page }, use) => {
    const myPage = new MyPage(page);
    await use(myPage);
  },
});
```

### 3. Write Tests
```typescript
import { test, expect } from '../fixtures/fixtures';

test('should perform action', async ({ myPage }) => {
  await myPage.navigateTo();
  await myPage.myAction();
  expect(true).toBe(true);
});
```

## Best Practices

1. **Use Page Object Model**: Encapsulate page interactions in page objects
2. **Keep selectors centralized**: Define locators as class properties
3. **Use fixtures**: Leverage Playwright fixtures for test setup
4. **Follow naming conventions**: Use clear, descriptive test names
5. **Avoid hardcoding**: Use configuration files for base URLs and test data
6. **Add explicit waits**: Use proper wait strategies instead of arbitrary delays
7. **Take screenshots**: Define when to capture evidence

## Useful Playwright Commands

- `npx playwright codegen` - Generate test code by recording browser interactions
- `npx playwright test --update-snapshots` - Update visual regression baselines
- `npx playwright test --trace on` - Record execution trace for debugging

## Configuration Examples

### Change Base URL
Edit `playwright.config.ts`:
```typescript
use: {
  baseURL: 'https://your-app.com',
}
```

### Adjust Timeout
```typescript
use: {
  timeout: 30000, // 30 seconds
}
```

### Run on specific browser
```bash
npx playwright test --project=chromium
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

ISC