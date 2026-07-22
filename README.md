# Vertical Design MD

[简体中文](README.zh-CN.md) · [Specification](docs/specification.md) · [Authoring guide](docs/authoring-guide.md) · [Publishing checklist](docs/publishing.md)

[![Quality](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/quality.yml/badge.svg)](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/quality.yml)
[![Pages](https://github.com/ReeCHECK/Vertical-Design-MD/actions/workflows/pages.yml/badge.svg)](https://reecheck.github.io/Vertical-Design-MD/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-3157c8.svg)](CHANGELOG.md)

Vertical Design MD is an open specification and a set of reference packs for generating **domain-aware professional interfaces with AI coding agents**.

**[Browse the generated pack catalog →](https://reecheck.github.io/Vertical-Design-MD/)**

Most AI design references describe how a product should look. Professional software also needs to describe what the product means, who may perform an action, how a workflow changes state, and what happens when data is incomplete, stale, sensitive, or dangerous. This project makes those constraints explicit and testable.

> A `DESIGN.md` controls the visual language. A Vertical Design Pack adds domain semantics, workflows, permissions, risk controls, content rules, edge states, and evaluation cases.

## Why this exists

Brand-derived design documents are excellent at improving visual consistency, especially for landing pages and prototypes. They are less reliable for trading terminals, clinical workstations, operations consoles, and other products where a visually plausible screen can still be operationally wrong.

Vertical Design MD extends the idea from:

```text
brand → style → components
```

to:

```text
domain → role → task → risk → state → interaction → visual expression
```

The project is inspired by [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md) and [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/), but the reference packs here are original, brand-neutral domain examples. No third-party logos, proprietary fonts, or copied brand assets are included.

## What is included

- A versioned, machine-readable pack manifest and JSON Schema.
- A layered documentation contract for visuals, domain models, workflows, states, permissions, compliance, and content.
- Three reference packs:
  - `fintech-trading`: order entry, positions, market-data freshness, and high-risk confirmation.
  - `healthcare-workstation`: patient context, medication safety, sensitive data, and clinical handoff.
  - `enterprise-operations`: queues, approvals, bulk actions, SLAs, and role-based access.
- A zero-dependency validator.
- A static preview catalog generator.
- CI checks suitable for GitHub Actions.
- A copyable template and scenario-based evaluation cases.

## Quick start

Requirements: Node.js 20 or newer.

```bash
npm test
```

Open `site/index.html` after the command completes to browse the generated catalog.

To use a pack with an AI coding agent:

1. Copy one directory from `packs/` into your product repository.
2. Ask the agent to read `manifest.json` first, then all files listed in `required_documents`.
3. Give it a user role, scenario, platform, and acceptance criteria.
4. Require it to implement every state listed for that scenario, not only the happy path.

Example prompt:

```text
Read packs/fintech-trading/manifest.json and every required document it lists.

Build the order-entry workspace for the trader role on desktop. Implement the
normal, loading, stale-data, validation-error, permission-denied, and submission-
uncertain states. Reuse our existing components. Treat compliance rules as hard
constraints and DESIGN.md as the visual contract. Explain any unresolved domain
assumption before generating code.
```

## Pack anatomy

```text
packs/<pack-id>/
├── manifest.json       # identity, scope, provenance, coverage, document map
├── tokens.json         # machine-readable visual and semantic tokens
├── DESIGN.md           # visual language and component behavior
├── DOMAIN.md           # actors, objects, terms, units, invariants
├── FLOWS.md            # workflows, transitions, preconditions
├── STATES.md           # empty, loading, stale, offline, error states
├── PERMISSIONS.md      # capabilities, visibility, and denied behavior
├── COMPLIANCE.md       # safety, privacy, audit, and confirmation rules
├── CONTENT.md          # terminology, number/date/unit formatting
├── patterns/           # reusable domain interaction patterns
└── evals/              # scenario-based acceptance cases
```

## Design principles

1. **Safety before style.** Domain, permission, and compliance constraints override visual preferences.
2. **States are first-class.** A professional component is incomplete until loading, empty, error, stale, partial, and denied behavior are known.
3. **Evidence over imitation.** Record provenance and confidence; do not present inferred behavior as an official design system.
4. **Brand neutral by default.** Learn structural qualities without copying trademarks or proprietary assets.
5. **Human review remains required.** These packs accelerate design and implementation; they do not certify legal, clinical, financial, or accessibility compliance.

## Create a new pack

Copy `templates/vertical-pack` to `packs/<your-pack-id>`, replace every `TODO`, and run:

```bash
npm run validate
npm run build:preview
```

See the [authoring guide](docs/authoring-guide.md) for the quality bar and [specification](docs/specification.md) for the contract.

## Roadmap

- [x] Specification v1 and manifest schema
- [x] Validator and preview catalog
- [x] Three professional reference packs
- [x] Scenario evaluation format
- [ ] Token adapters for CSS variables, Tailwind, and Figma variables
- [ ] Visual regression snapshots
- [ ] Community pack registry and quality scorecards
- [ ] Domain-expert review badges

## Responsible use

The repository is a design and engineering aid, not professional advice. A pack may be incomplete or wrong. Regulated deployments require review by qualified domain, legal, security, privacy, and accessibility specialists.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Contributions should improve reusable domain knowledge, include provenance, and add or update an evaluation case. Use [Discussions](https://github.com/ReeCHECK/Vertical-Design-MD/discussions) for early pack ideas.

## License

[MIT](LICENSE). Third-party products mentioned in documentation remain the property of their respective owners.
