# Troubleshooting Notes - Playwright + TypeScript

Common issues encountered while working on this project and how to resolve them.

## Test flakiness

**Symptom:** Test passes locally but fails intermittently in CI or on rerun.

- Check for missing awaits on async actions/assertions.
- Replace `page.waitForTimeout()` with a condition-based wait
  (`waitForSelector`, `waitForResponse`, `waitForURL`, or a web-first `expect`).
- Use `trace: 'on-first-retry'` (already set in `playwright.config.ts`) and
  inspect the trace with `npx playwright show-trace trace.zip`.
- If a locator matches a moving/animating element, prefer `toBeVisible()`
  assertions before interacting, since Playwright auto-retries them.

## Element not found / strict mode violation

**Symptom:** `Error: strict mode violation: locator resolved to N elements`.

- Narrow the locator with `.filter()`, `.nth()`, `.first()`, or a more
  specific `getByRole`/`getByTestId`.
- Prefer scoping to a parent container: `page.locator('.card').getByRole('button')`.

## Timeouts waiting for navigation/element

- Confirm the app actually navigates (check the URL manually).
- Increase timeout only for genuinely slow operations, scoped to that call:
  `await expect(locator).toBeVisible({ timeout: 15000 });`
  Avoid raising the global timeout for a single slow case.
- Check if the element is inside an iframe — use `page.frameLocator()`.

## Browser/driver issues

**Symptom:** `browserType.launch: Executable doesn't exist`.

```bash
npx playwright install            # install all browsers
npx playwright install chromium   # install a specific browser
npx playwright install-deps       # install OS-level dependencies (Linux)
```

## TypeScript compile errors in tests

- Ensure `@types/node` and `@playwright/test` versions are compatible
  (see `package.json` devDependencies).
- Run `npx tsc --noEmit` to type-check without running tests.

## Allure report issues

- This project uses `allure-playwright`. If the report is stale/empty,
  clear `allure-results/` and `allure-report/` and rerun tests before
  regenerating the report.

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Tests interfering with each other

- Confirm tests don't share mutable state (e.g. a module-level variable,
  the same logged-in browser storage state) unless intentional.
- Use `fullyParallel: true` awareness — each test file/worker gets its own
  browser context by default, but shared external state (DB, API test data)
  can still cause cross-test interference.

## CI-only failures

- Check `retries`/`workers` behavior differs on CI (`process.env.CI` in
  `playwright.config.ts` sets `retries: 2`, `workers: 1`).
- Headless vs local headed runs can behave differently for animations/timing
  — reproduce locally with `--headed` disabled or in Docker if needed.

## Useful debug commands

```bash
DEBUG=pw:api npx playwright test     # verbose Playwright API logs
npx playwright test --headed --slowmo=500
npx playwright test --repeat-each=5  # stress-test for flakiness
```
