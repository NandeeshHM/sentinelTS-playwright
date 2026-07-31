import js from '@eslint/js';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'allure-report/',
      'allure-results/',
      'test-results/',
      'playwright-report/',
      'sandbox/',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      // Prevents accidental loose comparisons such as value == '1'.
      'eqeqeq': ['error', 'always'],
      // Flags duplicate or empty semicolons (;;).
      'no-extra-semi': 'error',
      // Prevents invisible whitespace at the end of a line.
      'no-trailing-spaces': 'error',
      // Requires let or const because var is function-scoped and error-prone.
      'no-var': 'error',
      // Requires one semicolon at the end of statements for consistent formatting.
      'semi': ['error', 'always'],
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Detects promises (including Playwright actions) that were started but not awaited or handled.
      '@typescript-eslint/no-floating-promises': 'error',
      // Prevents async functions that do not await any asynchronous work.
      '@typescript-eslint/require-await': 'error',
    },
  },
  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      // Test hygiene and suite structure
      // Prevents old, disabled test code from being left in comments.
      'playwright/no-commented-out-tests': 'error',
      // Highlights slow-marked tests so their timeout increase is reviewed.
      'playwright/no-slowed-test': 'warn',
      // Encourages tags such as @smoke or @regression for targeted test runs.
      'playwright/require-tags': 'warn',
      // Keeps tests and hooks grouped inside a named test.describe() suite.
      'playwright/require-top-level-describe': 'error',

      // Locator resilience
      // Discourages first(), last(), and nth(), which can select the wrong element when the UI changes.
      'playwright/no-nth-methods': 'warn',
      // Encourages accessible, user-facing locators instead of CSS or XPath selectors.
      'playwright/no-raw-locators': 'warn',
      // Suggests getByRole(), getByLabel(), and similar Playwright locator helpers where applicable.
      'playwright/prefer-native-locators': 'warn',

      // Assertion quality
      // Suggests Playwright comparison matchers instead of manual comparison logic.
      'playwright/prefer-comparison-matcher': 'warn',
      // Suggests equality matchers that produce clearer failure messages.
      'playwright/prefer-equality-matcher': 'warn',
      // Suggests toStrictEqual() when strict object or array comparison is intended.
      'playwright/prefer-strict-equal': 'warn',
      // Suggests toBe() for direct primitive or reference equality assertions.
      'playwright/prefer-to-be': 'warn',
      // Suggests toContain() when checking that a value occurs within another value.
      'playwright/prefer-to-contain': 'warn',

      // Readability and consistency
      // Encourages setup hooks to be declared before the tests that use them.
      'playwright/prefer-hooks-on-top': 'warn',
      // Keeps test titles consistent by starting them with a lowercase letter.
      'playwright/prefer-lowercase-title': 'warn',
    },
  },
);
