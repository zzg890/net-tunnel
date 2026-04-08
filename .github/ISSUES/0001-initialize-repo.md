---
title: Initialize repository: add CONTRIBUTING, license, and CI baseline
labels: chores
---

## Summary

Add repository-level contributor guidance, a LICENSE, and a minimal CI configuration that runs linters and tests.

## Acceptance criteria
- CONTRIBUTING.md added with basic workflow and PR checklist
- LICENSE file added (MIT or project choice)
- CI pipeline added that at minimum runs linting

## Notes
- Use GitHub Actions for CI; start with a single job running on push/PR.
