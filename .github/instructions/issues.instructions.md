---
description: |
  Mappings and guidance to convert agent outputs (Project Manager, QA, DevOps) into GitHub issues
  using the repository issue templates in `.github/ISSUE_TEMPLATE/`.
applyTo:
  - ".*"
---

Usage
-----
- When the `Project Manager` agent produces backlog items or tasks, choose the appropriate template:
  - Bugs -> `.github/ISSUE_TEMPLATE/bug_report.md`
  - Feature/Enhancement -> `.github/ISSUE_TEMPLATE/feature_request.md`

Workflow
--------
1. Ask the `Project Manager`:

   Project Manager: convert the following planning notes into individual issues with priorities and estimates.

2. Review the agent's suggested issue bodies.
3. Use the Project Manager to create issues by copying the filled template into GitHub, or request the agent to create issues (agent will ask for confirmation before creating).

Fields & Conventions
--------------------
- **Title**: Keep concise, use `Component: short description` when possible (e.g., `CLI: add start command`).
- **Labels**: Project Manager suggests labels (priority:high/med/low, type:bug/feature, estimate:1/2/3).
- **Assignees**: Prefer to assign at triage or leave unassigned for sprint planning.

Agent Prompts (examples)
------------------------
- "Project Manager: convert the following TODOs into 5 prioritized GitHub issues with estimates and suggested labels."
- "QA: generate test-case issues for the top 3 critical user flows; use bug_report template for failures."

Safety & Confirmation
---------------------
- Agents will never push issues or patches without explicit user confirmation.
