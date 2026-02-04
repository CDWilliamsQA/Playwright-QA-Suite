# 🎭 Playwright QA Framework

Automated QA test framework built with **Playwright** to demonstrate **professional automation practices** integrated with **GitHub Actions CI/CD**.

This repository contains three separate test suites (**Smoke**, **Regression**, **API**) and generates both **HTML** and **JUnit XML** reports locally and in CI pipelines.

---

## 🧰 Features

- Playwright test runner (cross-browser ready via config)
- Structured test suites: **Smoke / Regression / API**
- HTML test reports
- JUnit XML output for CI visibility
- GitHub Actions workflows per suite
- Scalable folder structure for expanding coverage
- Demonstrates real-world automation engineering practices

---

## 📦 Prerequisites

- **Node.js 18+**
- Playwright browsers (installed automatically in CI and during local setup)

---

## 🚀 Getting Started (Local)

### 1. Install dependencies

```bash
npm install
npx playwright install
```

### 2. Run test suites

```bash
# Smoke suite
npx playwright test tests/smoke

# Regression suite
npx playwright test tests/regression

# API suite
npx playwright test tests/api
```

### 3. View HTML report

```bash
npx playwright show-report
```

---

## 📁 Project Structure

```
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
```

---

## ⚙️ CI/CD (GitHub Actions)

This repository includes **three GitHub Actions workflows**, one per suite:

| Suite | Workflow File |
|------|---------------|
| API | `playwright-api.yml` |
| Regression | `playwright-regression.yml` |
| Smoke | `playwright-smoke.yml` |

### Each workflow performs:

- Install dependencies  
- Install Playwright browsers  
- Run the test suite  
- Upload **HTML report** (`playwright-report/`) as an artifact  
- Upload **JUnit XML** (`results.xml`) as an artifact  

---

## 📊 Viewing CI Results

1. Go to the **Actions** tab on GitHub  
2. Select a workflow run (API / Regression / Smoke)  
3. Download artifacts from the run summary:

   - `playwright-report`
   - `junit-results`

---

## 🧑‍💻 Author

**C. D. Williams**

QA Automation Engineer  
Demonstrating scalable, CI-ready automation frameworks.
