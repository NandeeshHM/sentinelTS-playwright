# 🎭 SentinelTS — Playwright Automation Framework

> A robust, type-safe end-to-end (E2E) testing framework built with **Playwright** and **TypeScript**, designed for high execution speed, stability, and maintainability.

---

## 🚀 Features

- **Page Object Model (POM)** — Clean separation of page selectors, actions, and test logic
- **Type-Safe** — Written fully in TypeScript for compile-time safety and IDE auto-completion
- **Cross-Browser** — Runs across Chromium, Firefox, and WebKit
- **API Testing** — REST API test coverage alongside UI automation
- **CI/CD Ready** — GitHub Actions workflow for headless execution on every push
- **Advanced Reporting** — HTML reports with screenshots, videos, and traces on failure

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | UI & API Automation |
| TypeScript | Type-safe scripting |
| Node.js | Runtime |
| GitHub Actions | CI/CD Pipeline |
| HTML Reporter | Test Reporting |

---

## 📁 Project Structure

```
sentinelTS-playwright/
├── pages/              # Page Object Models
├── tests/              # Test specs
├── utils/              # Helper functions
├── .github/workflows/  # CI/CD pipeline
├── playwright.config.ts
└── package.json
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/NandeeshHM/sentinelTS-playwright.git
cd sentinelTS-playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/login.spec.ts

# Run on specific browser
npx playwright test --project=chromium
```

---

## 📊 Reports

```bash
# Open HTML report after test run
npx playwright show-report
```

---

## 👤 Author

**Nandeesh Hiremath**  
Senior Automation Engineer | 13+ Years | Playwright | TypeScript | CI/CD  
[GitHub](https://github.com/NandeeshHM)
