# My Framework Notes - sentinelTS-playwright

Working notes on how this repo is structured and how it's evolving toward a
proper framework.

## Current state

- Test runner: `@playwright/test` (v1.61.x)
- Language: TypeScript, `type: commonjs` in `package.json`
- Reporting: `allure-playwright` integrated, HTML reporter also enabled
  in `playwright.config.ts`
- `testDir` is `./tests`, with per-site subfolders:
  - `SauceDemo-Website`
  - `OrangeHRM-Demo-Website`
  - `Parabank-Automation-Website`
  - `AutomationExercise-Website`
  - `OpenWeather-Automation-Website`
  - `TutorialPointsAutomation`
  - `RandomSiteAutmation`
  - `Test-AutomationPractice-Website`
  - Plus loose utility/practice scripts (`API-UtilsScript.ts`,
    `WebAPIUtilScript.ts`, `Networkeventlisten.ts`, etc.)
- `e2e/` folder currently holds an ignored spec (`example.ignorespec.ts`).

## Target framework structure (to move toward)

```
tests/
  <site-name>/
    <feature>.spec.ts
pages/
  <SiteName>/
    LoginPage.ts
    DashboardPage.ts
fixtures/
  auth.fixture.ts
  api.fixture.ts
utils/
  test-data.ts
  api-client.ts
docs/
playwright.config.ts
```

- One Page Object per page/component, not per test.
- Fixtures for anything reused across multiple spec files (auth state,
  API clients, seeded test data).
- Keep one-off practice/scratch scripts out of `tests/` (they get picked
  up by the test runner) — move to a `scratch/` or `sandbox/` folder, or
  exclude via `testDir`/`testMatch` config.

## Naming conventions to adopt

- Spec files: `*.spec.ts` (not `.ts` without `.spec`, and not `.js`) so
  they're unambiguous with Playwright's default `testMatch`.
- Page objects: `PascalCase` class name matching file name, e.g. `LoginPage.ts`.
- Fixtures: `*.fixture.ts`.
- Avoid `Ignorespec` naming inconsistency (`example.ignorespec.ts` vs
  `example.Ignorespec.ts`) — pick one casing convention.

## Multi-site framework considerations

Since this repo automates many different demo/practice sites:

- Each site's Page Objects and fixtures should stay isolated under its own
  folder — don't let one site's locators leak into another's page object.
- Common utilities (API client, data generators, custom assertions) belong
  in a shared `utils/` so they aren't duplicated per site.
- Consider a `projects` split per site in `playwright.config.ts` if
  base URLs or auth setup differ significantly.

## Reporting

- Allure results go to `allure-results/`, generated report to
  `allure-report/` — both are build artifacts and should stay out of
  version control if not already ignored.
- HTML reporter (built-in) is also enabled; `npx playwright show-report`
  opens it after a run.

## Open items / ideas

- Add a `.env` + `dotenv` setup (already stubbed as comments in
  `playwright.config.ts`) instead of hardcoding URLs per site.
- Add CI workflow (GitHub Actions) to run tests + publish Allure report.
- Introduce a base `Page` class with shared waits/helpers that all site
  Page Objects extend.
