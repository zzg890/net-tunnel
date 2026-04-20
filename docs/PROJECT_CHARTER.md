## Project Charter — net-tunnel

### Vision

Provide a lightweight, reliable network tunneling tool that enables secure remote access and forwarding with minimal configuration.

### Objectives (first 3 months)

- Deliver a minimal viable product (v0.1) demonstrating basic TCP tunnel/forwarding functionality.
- Establish CI baseline, tests, and contributor onboarding materials.
- Define roadmap and initial backlog for features (authentication, metrics, persistence).

### Scope (in-scope)

- Core tunneling: TCP forwarding, connection management, and basic CLI.
- Documentation, CI, and contributor guidelines.
- Agent scaffolding to assist project workflows (already added).

### Out of scope (initial)

- Advanced auth providers, GUI clients, and production-grade HA clustering.

### Stakeholders

- Maintainers, contributors, and early adopter users.

### Success metrics

- v0.1 release with CI passing and basic tests.
- At least 2 external contributors able to open PRs using the contributor guide.
- Clear roadmap and 5 prioritized backlog items for v0.2.

### Milestones

- v0.1 (0–8 weeks): repo scaffolding, CI, basic tunnel implementation, README, CONTRIBUTING
- v0.2 (8–20 weeks): auth options, tests, performance tuning, packaging

### Assumptions & Constraints

- Small core team (2–4 contributors).
- Initial language/runtime: Python 3.11 (flexible to change).
- Timeboxed sprints (2-week cadence).

### Risks

- Scope creep: mitigate via small work units and prioritization.
- Security gaps: require threat review before public releases.

### Next actions

1. Finalize feature backlog and owners (Project Manager agent can assist).
2. Implement CI test coverage and add basic unit tests for core components.
3. Choose license and add `CODE_OF_CONDUCT.md`.
