# Healthcare Workstation Workflows

## Confirm patient and review summary

Entry displays policy-approved identifiers and encounter. The user actively confirms the intended patient when arriving from ambiguous search, handoff, or external context. Identity conflict blocks clinical mutation and provides the approved resolution path. The summary separates current, historical, unverified, corrected, and unavailable information.

## Reconcile medications

Each source list is preserved with provenance. The user compares normalized candidates, records continue/change/stop/unknown decisions with reason when policy requires, and resolves duplicates or conflicts. Review restates medication, strength, dose, route, frequency, decision, source, and unresolved issues. Signing creates an attributable version; it does not silently overwrite source history.

## Clinical handoff

The sender identifies active concerns, recent changes, pending results, required actions, owner, and due time. The receiver acknowledges individual high-priority items or the handoff according to policy. Unacknowledged or overdue items remain visible to the responsible workflow and are not marked complete by page view alone.

## State transitions

```text
draft → reviewed → signed → amended
source-item → matched/unmatched/conflicting → reconciled/left-unresolved
handoff-item → assigned → acknowledged → completed/escalated
```

Leaving a draft preserves it according to security policy and clearly marks it unsigned. Changing patient or encounter requires explicit handling of unsaved work.
