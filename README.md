# 🎭 Playwright QA Framework

Automated QA test framework built with **Playwright** to demonstrate **professional automation practices** with **GitHub Actions CI/CD**.

This repo contains three separate suites (**Smoke**, **Regression**, **API**) and produces both **HTML** and **JUnit** reports locally and in CI.

---

## 🧰 Features

- ✅ Playwright test runner (cross-browser capable via config)
- ✅ Separate suites: **Smoke / Regression / API**
- ✅ HTML report output + **JUnit XML** for CI visibility
- ✅ GitHub Actions workflows per suite
- ✅ Scalable folder structure for growing coverage

---

## 📦 Prerequisites

- **Node.js 18+**
- Playwright browsers installed (handled automatically in CI; one-time install locally)

---

## 🚀 Getting Started (Local)

### 1) Install dependencies
```bash
npm install

npx playwright install

# Smoke
npx playwright test tests/smoke

# Regression
npx playwright test tests/regression

# API
npx playwright test tests/api

npx playwright show-report

.
├── tests/
│ ├── api/
│ ├── regression/
│ └── smoke/
├── playwright.config.ts
├── package.json
├── .github/
│ └── workflows/
│ ├── playwright-api.yml
│ ├── playwright-regression.yml
│ └── playwright-smoke.yml
├── docs/
│ └── CI/
│ └── CI_debug_log.md
└── README.md

⚙️ CI/CD (GitHub Actions)
This repository includes three GitHub Actions workflows, one per suite:
API Suite (playwright-api.yml)
Regression Suite (playwright-regression.yml)
Smoke Suite (playwright-smoke.yml)
Each workflow will:
Install dependencies
Install Playwright browsers
Run the suite
Upload HTML report (playwright-report/) as an artifact
Upload JUnit XML (results.xml) as an artifact
Viewing CI results
Go to the Actions tab in GitHub
Select a workflow run (API / Regression / Smoke)
Download artifacts from the run summary:
playwright-report
junit-results

🧑‍💻 Author
C. D. Williams
Independent QA Engineer | Automation Specialist
Built as part of ongoing QA upskilling and CI/CD framework development.
