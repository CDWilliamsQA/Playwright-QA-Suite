# CI Debug Log (Playwright QA Suite)

This log captures issues encountered while building and stabilising the GitHub Actions CI pipelines for this Playwright framework.  
Goal: keep a concise record of failures, root causes, fixes, and evidence.

---

## Summary

- **Framework:** Playwright + TypeScript
- **Suites:** Smoke / Regression / API
- **CI Output:** HTML report + JUnit (`results.xml`)
- **Current status:** ✅ Smoke ✅ Regression ✅ API all passing independently

---

## Timeline of CI Issues & Fixes

### 1) Workflow failing with exit code 1, but no tests executed
**Symptom**
- Workflow step: `Run Playwright tests`
- Job ended with `Process completed with exit code 1`
- Output looked like “0 tests / 0 failures / 0 errors”, but still failed.

**Root cause**
- Misconfigured or invalid test file(s) introduced during experimentation (one broken spec caused the Playwright run to error).

**Fix**
- Removed the problematic test file (`api.spec.ts`) and returned to a stable baseline before reintroducing API tests in a controlled way.

**Result**
- CI returned to ✅ green state with the original pipeline.

**Evidence**
- GitHub Actions run(s): (https://github.com/CDWilliamsQA/Playwright-QA-Suite/actions)


