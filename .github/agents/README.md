# Agents in this repository

This folder contains workspace-scoped agent descriptions that the team can use via the Copilot Chat assistant.

See the repository-level index: [AGENTS.md](../AGENTS.md)

Usage
-----
- Ask the assistant to use one of the agents by name, for example: "Project Manager: create a 2-week sprint plan".
- Agent files live here as `.agent.md` files and include `applyTo` and `tools` metadata.

Recommended first agents
------------------------
- `Project Manager` — planning, roadmaps, issues
- `Technical Lead` — architecture and high-risk decisions
- `DevOps` — CI/CD and deployment guidance

Where artifacts go
------------------
- Agents may suggest creating GitHub issues or saving files under `docs/`.
  Issue templates live in `.github/ISSUE_TEMPLATE/` and starter drafts are in `.github/ISSUES/`.
