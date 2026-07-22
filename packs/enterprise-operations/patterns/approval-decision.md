# Evidence-Based Approval Decision

## Context and anatomy

Use for an accountable decision requiring evidence. Show requester, purpose, affected scope, policy, evidence freshness, conflicts, previous decisions, expiry, separation-of-duties result, and available decisions.

## Behavior and states

Approval revalidates permission and evidence versions. Request changes preserves context and assigns the next owner. A timeout creates an uncertain result and reconciles before a second decision. Expired requests cannot be approved through a stale dialog.

## Accessibility and anti-patterns

Evidence has headings and source metadata; decision controls are named and keyboard reachable. Do not put approve as the default focused action, hide conflicts below the fold without a summary, or make reject visually look like a destructive data deletion.
