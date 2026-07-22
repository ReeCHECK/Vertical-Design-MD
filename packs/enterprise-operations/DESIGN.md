# Enterprise Operations Visual Contract

## Principles

Make scope, priority, ownership, SLA, data recency, and action consequence easy to scan. Support compact and comfortable density without changing meaning. The interface favors stable regions and predictable interaction over decorative novelty.

## Layout and hierarchy

Desktop uses navigation, queue controls, a primary work table, and an optional detail inspector. The current workspace, queue, saved view, filters, and result count are visible together. Opening detail does not lose table selection or scroll position. Tablet moves detail to a dedicated view while preserving scope and return position.

Tables have sticky labeled headers, column configuration, keyboard navigation, saved views, explicit sort order, and a visible timezone. Selection shows both selected count and selection scope. SLA and priority never use color alone.

## Components

- **Scope header:** workspace, queue/view, filters, timezone, refresh time, result count.
- **Work table:** identity, status, priority, owner, age/SLA, key attributes, and row actions.
- **Detail inspector:** summary, evidence, activity, related objects, editable fields, and next actions.
- **Bulk action bar:** selected count, scope, exclusions, action, review, progress, and result export.
- **Approval card:** requester, purpose, affected scope, evidence, policy checks, history, and decision.

## Interaction and accessibility

Every function is keyboard reachable without requiring pointer-only drag. Selection state is announced and visually persistent. Inline editing has explicit save/cancel and does not commit on focus loss. Live updates preserve focus and row order unless the user requests resorting. Toasts supplement, never replace, durable result status.

## Non-goals

This contract does not define organization policy, approval thresholds, SLA calculation, authorization, tenant isolation, or record retention. These must come from trusted product services and reviewed governance.
