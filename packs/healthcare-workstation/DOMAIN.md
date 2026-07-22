# Healthcare Workstation Domain Model

## Actors

Clinicians assess and decide; nurses administer, observe, and coordinate; pharmacists verify medication information; care coordinators manage transitions. Exact scope depends on credentials, organization, encounter, location, and local policy.

## Core objects

- **Patient identity:** policy-approved identifiers and match/conflict status.
- **Encounter:** care context, location, attending team, start/end, and status.
- **Clinical fact:** coded concept, value, unit, interpretation, observation time, source, author, and correction status.
- **Medication item:** medication identity, strength, dose, route, frequency, indication when appropriate, source, status, and reconciliation decision.
- **Allergy/intolerance:** substance, reaction, severity, verification, source, and status.
- **Handoff item:** concern, action, accountable owner, due time, acknowledgement, and completion.

## Terms and units

`Unknown`, `not asked`, `not available`, `not applicable`, and `none reported` are different states. A medication list is not automatically a current administration record. Observation time differs from entry time. Units are part of a clinical value and must never be dropped.

## Invariants

1. The active patient and encounter remain visible during any clinical mutation.
2. Clinical facts retain source, observation time, and correction/status context.
3. Unknown is never rendered as normal, negative, or zero.
4. Conflicting identities or medication data remain visible until resolved by authorized workflow.
5. Display transformations never alter stored clinical meaning.
6. UI role visibility never replaces service-side authorization.
