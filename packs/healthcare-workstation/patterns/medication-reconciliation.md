# Medication Reconciliation

## Context and anatomy

Place source lists beside a normalized candidate and reconciliation decision. Each row retains medication identity, strength, dose, route, frequency, source, recency, conflicts, decision, and reason when required.

## Behavior and states

Matching is a proposal until an authorized user confirms it. Conflicts and unknowns remain explicit and can be left unresolved with reason according to policy. Signing creates an attributable result and preserves source lineage.

## Accessibility and anti-patterns

Use full labels, error associations, and a row summary suitable for linear reading. Do not merge look-alike medication names automatically, hide units to save width, or represent continue/stop solely with green/red controls.
