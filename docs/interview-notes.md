# SDET / QA Automation Interview Notes

Personal prep notes for automation/SDET interviews, focused on Playwright + TypeScript.

## Playwright vs Selenium - talking points

- Playwright has built-in auto-waiting and web-first assertions; Selenium
  needs explicit/implicit waits configured manually.
- Playwright runs across Chromium, Firefox, and WebKit with one API; no
  separate driver binaries to manage (no WebDriver/ChromeDriver version
  matching issues).
- Native support for network interception/mocking (`page.route()`),
  multiple browser contexts (isolated "incognito" sessions) in one process,
  and a built-in Trace Viewer for debugging failures.
- Parallelization and test isolation are first-class in `@playwright/test`
  (via fixtures and worker-scoped browser contexts).

## Core concepts to be ready to explain

- **Auto-waiting**: Playwright waits for actionability (visible, stable,
  enabled, receives events) before acting — reduces flaky `sleep()` calls.
- **Locators vs ElementHandles**: locators are lazy and re-query the DOM
  on each action, making them resilient to re-renders; ElementHandles are
  a snapshot and can go stale.
- **Web-first assertions**: `expect(locator).toBeVisible()` retries until
  timeout instead of failing immediately — explain why this reduces flake.
- **Browser contexts**: isolated sessions (cookies/storage) within a single
  browser instance — used for multi-user tests or fast isolated test setup
  without relaunching a browser.
- **Trace Viewer**: records DOM snapshots, network, console, and actions
  for post-mortem debugging, especially useful in CI.
- **Fixtures**: dependency-injection style setup/teardown, extendable and
  composable, replacing traditional `beforeEach`/`afterEach` boilerplate.

## Framework design questions to prepare for

- "Walk me through your framework structure." — Be ready to describe
  Page Object Model, fixtures, config, reporting, and CI integration
  (see [myframeworks-notes.md](myframeworks-notes.md)).
- "How do you handle flaky tests?" — auto-waiting, avoiding hard sleeps,
  retry strategy (`retries` in CI only), trace analysis, root-causing
  instead of blindly retrying.
- "How do you handle test data?" — API-driven setup instead of UI-driven
  where possible, isolated data per test, cleanup strategy.
- "How do you integrate this into CI/CD?" — GitHub Actions/Jenkins running
  `npx playwright test`, publishing HTML/Allure reports, parallel shards.
- "How do you test APIs alongside UI?" — Playwright's `request` context
  for API calls, validating UI state against API responses.

## Behavioral / process questions

- Be ready with a concrete example of a bug your automation caught that
  manual testing missed.
- Be ready to explain a time a test was flaky and how you diagnosed and
  fixed the root cause (not just added retries).
- Be ready to explain trade-offs: what you chose NOT to automate and why
  (e.g. payment flows, real delivery workflows — see
  [automation-approch.md](automation-approch.md)).

## Portfolio project talking points

Reference [automation-approch.md](automation-approch.md) for the reasoning
behind site selection (SauceDemo, OrangeHRM, ParaBank, GitHub, etc.) and
why certain flows (payments, real deliveries) were intentionally avoided.
Be ready to justify:

- Why these sites over something like Australia Post (data/account
  dependency, flaky external systems).
- What each site demonstrates (framework showcase, CRUD, API+UI, dynamic
  content) so the portfolio reads as intentional, not random.

## Quick answers to common technical questions

- **XPath vs CSS vs role-based locators?** Prefer role-based/user-facing
  locators for resilience and accessibility alignment; CSS/XPath as a
  fallback for cases with no accessible attributes.
- **How do you avoid hardcoded waits?** `page.waitForResponse()`,
  `waitForURL()`, web-first `expect()`, `waitForLoadState()`.
- **How do you scale execution?** `fullyParallel: true`, worker count
  tuning, sharding across CI runners (`--shard=1/4` etc.).
