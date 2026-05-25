# testmu-sdet2-akanksha
Hybrid UI + API automation framework using Playwright, Rest Assured, TestNG, Allure and GitHub Actions
# TestMu AI - SDET2 Assessment

## Framework Overview

This project is a Playwright-based automation framework designed for UI, API, and integration testing.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- GitHub Actions
- Axios

## Framework Features

- Page Object Model (POM)
- Cross-browser execution
- API CRUD testing
- Retry mechanism
- HTML reporting
- Screenshots on failure
- Video recording on failure
- Trace collection
- GitHub Actions CI integration

## Folder Structure

```txt
pages/
tests/
  ├── api/
  └── ui/
api/
utils/
test-data/
.github/workflows/
```

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API tests:

```bash
npx playwright test tests/api
```

## Reporting

```bash
npx playwright show-report
![CI Success](screenshots/ci-success.png)
```

## CI/CD

GitHub Actions pipeline automatically runs tests on:
- push
- pull request

## Future Improvements

- Allure reporting
- Docker execution
- Parallel cloud execution
- Visual testing
- Performance testing