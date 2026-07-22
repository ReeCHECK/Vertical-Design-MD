# Healthcare Workstation Visual Contract

## Principles

Patient identity, encounter context, allergies, critical warnings, source, and recency outrank decorative hierarchy. The interface is calm, legible, and explicit; urgency is communicated through words and structured placement rather than saturated color everywhere. Clinical data is grouped by decision, not merely by database table.

## Layout and hierarchy

Desktop uses a persistent patient context bar, a task navigator, and one primary work region. The context bar includes at least two policy-approved identifiers, encounter/location, and sensitivity restrictions without exposing more data than necessary. Critical allergies and identity conflicts sit below identity and cannot be scrolled out during medication actions.

Panels have strong headings, source labels, observation time, and author/status where relevant. Longitudinal data provides trend and exact values. Tablet layout stacks task panels but preserves identity, critical warnings, and pending unsigned work.

## Components

- **Patient context bar:** verified identity, encounter, location, restrictions, and conflict state.
- **Clinical fact:** name, value, unit, reference/interpretation, observed time, source, and status.
- **Medication row:** normalized name, strength, form, route, frequency, status, source, and reconciliation decision.
- **Critical alert:** condition, consequence, evidence/source, owner, and required response.
- **Handoff item:** concern, current status, owner, due time, action, and acknowledgement.

## Interaction and accessibility

All controls have persistent labels and visible focus. Critical alerts are announced on entry once and remain navigable by heading; routine updates do not flood live regions. Color never carries allergy, abnormal, or medication-status meaning alone. Abbreviations expand on first use or through accessible help. Tables support row and column header relationships plus a linear reading mode.

## Non-goals

The visual contract does not define clinical meaning, diagnostic thresholds, dosage rules, patient-matching policy, consent, retention, emergency override policy, or legal compliance. Those must be supplied and enforced by reviewed clinical systems.
