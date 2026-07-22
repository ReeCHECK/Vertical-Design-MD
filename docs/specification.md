# Vertical Design Pack Specification v1

## Normative language

The words MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY are normative. The JSON Schema is authoritative for `manifest.json`; this document defines cross-file semantics.

## Package contract

A pack MUST be stored at `packs/<id>` and MUST contain every document listed in `manifest.json.required_documents`. The directory name MUST equal the manifest `id`.

`DESIGN.md` describes presentation and interaction. It MUST NOT override a safety, permission, privacy, or domain invariant defined elsewhere. Conflicts use this precedence:

```text
COMPLIANCE > PERMISSIONS > DOMAIN/FLOWS > STATES/CONTENT > DESIGN
```

## Manifest

The manifest declares:

- stable identity and semantic version;
- domain, supported surfaces, audiences, risk, and density;
- required document paths;
- scenario and state coverage;
- provenance with source type, URL, review date, and confidence;
- accessibility target and localization support.

See `schema/design-pack.schema.json` for exact types and allowed values.

## Tokens

`tokens.json` MUST contain source metadata and the token groups `color`, `space`, `radius`, and `type`. Tokens SHOULD use semantic names such as `status.critical`, not visual names such as `red500`, when the meaning matters. A pack MUST NOT encode status using color alone.

## Required documents

### DESIGN.md

MUST define principles, hierarchy, layout, components, interaction, responsive behavior, accessibility behavior, and non-goals.

### DOMAIN.md

MUST define actors, core objects, domain terms, units, and invariants. An invariant is a rule that remains true regardless of layout.

### FLOWS.md

MUST define entry conditions, steps, state transitions, success criteria, cancellation, and uncertain outcomes for key workflows.

### STATES.md

MUST define at least loading, empty, error, permission denied, stale or partial data, offline or reconnecting, and success feedback where applicable.

### PERMISSIONS.md

MUST define capabilities by role, field-level visibility where relevant, and UI behavior when access is denied. Hidden controls MUST NOT be treated as enforcement.

### COMPLIANCE.md

MUST distinguish mandatory product rules from recommendations. It MUST define audit, privacy, sensitive-data, destructive-action, and human-review expectations relevant to the domain.

### CONTENT.md

MUST define terminology, number/date/time/unit formatting, warnings, destructive-action copy, and localization constraints.

## Patterns and evaluations

Patterns are reusable professional interaction recipes. Each pattern SHOULD identify context, anatomy, behavior, states, accessibility, and anti-patterns.

Each evaluation file MUST describe a scenario, role, task, input, expected states, assertions, and forbidden outcomes. Evaluation cases are acceptance tests for agent output, not executable compliance certifications.

## Versioning

Packs use semantic versioning. Breaking changes to object meaning, required permissions, workflow transitions, or token names require a major version. Additive scenarios and patterns require a minor version. Corrections that preserve behavior require a patch version.
