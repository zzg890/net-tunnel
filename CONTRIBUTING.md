# Contributing

Thanks for contributing! This document covers how to open issues, make changes, and submit PRs.

Reporting issues
----------------
- Use the issue templates in `.github/ISSUE_TEMPLATE/` for bug reports, feature requests, and tasks.
- Provide a clear title, steps to reproduce (if applicable), and expected vs actual behavior.

Working on changes
-------------------
- Fork or branch from `main`. Use a descriptive branch name, e.g. `feat/remote-forwarding` or `fix/typo-readme`.
- Keep changes small and focused (work units <= 2 days preferred).

Tests and CI
-----------
- This repository includes a basic GitHub Actions CI workflow at `.github/workflows/ci.yml` that runs linters and tests when present.
- Add tests for any new behavior. Run tests locally with `pytest` if available.

Pull requests
-------------
- Use the PR template at `.github/PULL_REQUEST_TEMPLATE.md` and reference related issues (e.g. `Closes #1`).
- Ensure CI passes and include notes for reviewers in the PR description.

Code style and linting
---------------------
- Follow existing project style. If the project uses `flake8`/`pylint`, run them before submitting.

Licensing and CLA
-----------------
- Include a License file at the repository root. By contributing you agree your contributions follow the repository license.

Contact
-------
- If you need help, open an issue and tag @maintainers or `Project Manager` agent for planning help.
